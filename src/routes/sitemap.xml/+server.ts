import type { Post, Project } from '../../app';
import type { RequestHandler } from './$types';

enum ChangeFreq {
	DAILY = 'daily',
	WEEKLY = 'weekly',
	MONTHLY = 'monthly'
}

enum Priority {
	HIGH = 1,
	NORMAL = 0.8,
	LOW = 0.5
}

export const GET: RequestHandler = async ({ url, locals }) => {
	const baseUrl = `${url.protocol}//${url.host}`;

	const pages = ['about', 'resume', 'portfolio', 'blog', 'contact'];

	const [posts, projects] = await Promise.all([
		locals.pb.collection('posts').getFullList<Post>({ fields: 'slug' }),
		locals.pb.collection('projects').getFullList<Project>({ fields: 'slug' })
	]);

	const siteMap = [
		{
			loc: `/`,
			changeFreq: ChangeFreq.DAILY,
			priority: Priority.HIGH
		}
	];

	for (const page of pages) {
		siteMap.push({
			loc: `/${page}`,
			changeFreq: ChangeFreq.WEEKLY,
			priority: Priority.NORMAL
		});
	}

	for (const post of posts) {
		siteMap.push({
			loc: `/blog/${post.slug}`,
			changeFreq: ChangeFreq.MONTHLY,
			priority: Priority.NORMAL
		});
	}

	for (const project of projects) {
		siteMap.push({
			loc: `/portfolio/${project.slug}`,
			changeFreq: ChangeFreq.MONTHLY,
			priority: Priority.NORMAL
		});
	}

	const response = new Response(`<?xml version="1.0" encoding="UTF-8" ?>
	<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
	${siteMap.map(({ loc, changeFreq, priority }) => `<url><loc>${baseUrl}${loc}</loc><changefreq>${changeFreq}</changefreq><priority>${priority}</priority></url>`).join('\r')}
	</urlset>`);

	response.headers.set('Cache-Control', 'max-age=0, s-maxage=3600');
	response.headers.set('content-type', 'application/xml');
	return response;
};
