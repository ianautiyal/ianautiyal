import { validateFormData } from '$lib';
import { fail, type Actions } from '@sveltejs/kit';

export const actions = {
	default: async ({ request, locals }) => {
		const formData = await request.formData();

		const [name, email, message] = [
			formData.get('name'),
			formData.get('email'),
			formData.get('message')
		];

		const errors = validateFormData(
			{ name, email, message },
			{
				name: ['required', 'string'],
				email: ['required', 'email'],
				message: ['required', 'string', 'maxLength:1000']
			}
		);

		if (errors) {
			return fail(400, { errors });
		}

		try {
			await locals.pb.collection('contacts').create({ name, email, message });
		} catch (_) {
			console.log(_);

			return fail(500, { error: 'Failed to send message.' });
		}

		return { success: 'I appreciate you contacting us me. I will get back to you shortly.' };
	}
} satisfies Actions;
