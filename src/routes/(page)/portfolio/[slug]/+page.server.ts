import { error } from '@sveltejs/kit';
import type { Project } from '../../../../app';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ locals, params }) => {
	return {
		project: locals.pb
			.collection('projects')
			.getFirstListItem<Project>(`slug='${params.slug}'`)
			.then(({ thumbnail, ...item }) => ({
				...item,
				thumbnail: locals.pb.files.getUrl(item, thumbnail)
			}))
			.catch(() => error(404, 'Project not found'))
	};
};
