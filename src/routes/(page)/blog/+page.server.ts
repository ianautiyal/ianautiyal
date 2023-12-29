import type { Post } from '../../../app';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ locals }) => {
	return {
		posts: locals.pb
			.collection('posts')
			.getList<Omit<Post, 'content'>>(1, 50, {
				fields: 'collectionId,id,title,slug,thumbnail,overview',
				sort: '-created'
			})
			.then((result) => ({
				...result,
				items: result.items.map((post) => ({
					...post,
					thumbnail: locals.pb.files.getUrl(post, post.thumbnail)
				}))
			}))
	};
};
