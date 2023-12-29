import { error } from '@sveltejs/kit';
import type { Post } from '../../../../app';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ locals, params }) => {
	try {
		return {
			post: locals.pb
				.collection('posts')
				.getList<Pick<Post, 'id'>>(1, 1, {
					filter: `slug = "${params.slug}"`,
					fields: 'id'
				})
				.then(({ items: [post] }) =>
					locals.pb
						.collection('posts')
						.getOne<Post>(post.id)
						.then((post) => ({
							...post,
							thumbnail: locals.pb.files.getUrl(post, post.thumbnail)
						}))
				)
		};
	} catch (_) {
		error(404, 'Post not found');
	}
};
