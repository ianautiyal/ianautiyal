import { validateFormData } from '$lib';
import { fail, type Actions } from '@sveltejs/kit';

export const actions = {
	default: async ({ request }) => {
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

		return { success: 'I appreciate you contacting us me. I will get back to you shortly.' };
	}
} satisfies Actions;
