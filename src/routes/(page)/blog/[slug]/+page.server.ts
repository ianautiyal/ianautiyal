import { error } from '@sveltejs/kit';
import type { Post } from '../../../../app';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ locals, params }) => {
	return {
		post: locals.pb
			.collection('posts')
			.getFirstListItem<Post>(`slug='${params.slug}'`)
			.then(({ thumbnail, ...item }) => ({
				...item,
				thumbnail: locals.pb.files.getUrl(item, thumbnail)
			}))
			.catch(() => error(404, 'Post not found'))
	};
};
