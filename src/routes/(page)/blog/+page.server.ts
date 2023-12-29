import type { Post } from '../../../app';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ locals }) => {
	return {
		posts: locals.pb
			.collection('posts')
			.getList<Post>(1, 50, {
				fields: 'collectionId,id,title,slug,thumbnail,overview',
				sort: '-created'
			})
			.then(({ items, ...rest }) => ({
				...rest,
				items: items.map(({ thumbnail, ...item }) => ({
					...item,
					thumbnail: locals.pb.files.getUrl(item, thumbnail)
				}))
			}))
	};
};
