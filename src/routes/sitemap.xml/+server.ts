import type { Post, Project } from '../../app';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url, locals }) => {
	const baseUrl = `${url.protocol}//${url.host}`;

	const pages = ['about', 'resume', 'portfolio', 'blog', 'contact'];

	const [posts, projects] = await Promise.all([
		locals.pb.collection('posts').getFullList<Post>({ fields: 'slug' }),
		locals.pb.collection('projects').getFullList<Project>({ fields: 'slug' })
	]);

	const response = new Response(`<?xml version="1.0" encoding="UTF-8" ?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
        ${sitemapItem(`${baseUrl}/`, 'daily', 1)}
        ${pages.map((page) => sitemapItem(`${baseUrl}/${page}`, 'daily', 0.8)).join('\r')}
        ${posts
					.map((post) => sitemapItem(`${baseUrl}/blog/${post.slug}`, 'weekly', 0.5))
					.join('\r')}
        ${projects
					.map((project) => sitemapItem(`${baseUrl}/portfolio/${project.slug}`, 'weekly', 0.5))
					.join('\r')}
    </urlset>`);

	response.headers.set('Cache-Control', 'max-age=0, s-maxage=3600');
	response.headers.set('content-type', 'application/xml');
	return response;
};

function sitemapItem(loc: string, changeFreq: 'daily' | 'weekly' | 'monthly', priority: number) {
	return `<url>
        <loc>${loc}</loc>
        <changefreq>${changeFreq}</changefreq>
        <priority>${priority}</priority>
    </url>`;
}
