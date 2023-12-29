import { error } from '@sveltejs/kit';
import type { Project } from '../../../../app';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ locals, params }) => {
	try {
		return {
			project: locals.pb
				.collection('projects')
				.getList<Project>(1, 1, { filter: `slug = "${params.slug}"` })
				.then(({ items: [{ thumbnail, ...item }] }) => ({
					...item,
					thumbnail: locals.pb.files.getUrl(item, thumbnail)
				}))
		};
	} catch (_) {
		error(404, 'Post not found');
	}
};
