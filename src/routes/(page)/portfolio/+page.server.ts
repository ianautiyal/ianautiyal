import PocketBase, { type RecordListOptions } from 'pocketbase';
import type { Category, Project } from '../../../app';
import type { PageServerLoad } from './$types';

function getCategories(pocketbase: PocketBase) {
	return pocketbase.collection('categories').getFullList<Category>({
		fields: 'collectionId,id,name',
		sort: 'name'
	});
}

function getProjects(pocketbase: PocketBase, categories: Category['name'][]) {
	const options: RecordListOptions = {
		fields: 'collectionId,id,title,slug,thumbnail,overview',
		sort: '-created'
	};

	if (categories.length) {
		options.filter = pocketbase.filter(
			categories.map((category, index) => `categories.name ?= {:category_${index}}`).join(' || '),
			categories.reduce((obj, category, index) => ({ ...obj, [`category_${index}`]: category }), {})
		);
	}

	return pocketbase
		.collection('projects')
		.getList<Project>(1, 50, options)
		.then(({ items, ...rest }) => ({
			...rest,
			items: items.map(({ thumbnail, ...item }) => ({
				...item,
				thumbnail: pocketbase.files.getUrl(item, thumbnail)
			}))
		}));
}

export const load: PageServerLoad = ({ locals, url }) => {
	const categories = url.searchParams.getAll('categories');

	return {
		categories: getCategories(locals.pb),
		projects: getProjects(locals.pb, categories)
	};
};
