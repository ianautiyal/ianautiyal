import { env } from '$env/dynamic/private';
import type { Handle } from '@sveltejs/kit';
import PocketBase from 'pocketbase';

export const handle: Handle = async ({ event, resolve }) => {
	event.locals.pb = new PocketBase(env.POCKETBASE_URL);
	event.locals.pb.authStore.loadFromCookie(env.POCKETBASE_TOKEN);

	try {
		if (event.locals.pb.authStore.isValid) {
			await event.locals.pb.collection('users').authRefresh();
		} else {
			await event.locals.pb
				.collection('users')
				.authWithPassword(env.POCKETBASE_USERNAME, env.POCKETBASE_PASSWORD);
		}
	} catch (_) {
		event.locals.pb.authStore.clear();
	}

	env.POCKETBASE_TOKEN = event.locals.pb.authStore.exportToCookie();

	return await resolve(event);
};
