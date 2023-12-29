export function validateFormData<K extends string>(
	data: Record<K, unknown>,
	rules: Record<K, string[]>
) {
	const errors = {} as Record<K, string[]>;

	for (const field in rules) {
		const error = [];
		const value = data[field];

		for (const _rule of rules[field]) {
			const [rule, params] = _rule.split(':');

			switch (rule) {
				case 'required':
					if (!value) {
						error.push(`The ${field} field is required.`);
					}
					break;

				case 'email':
					if (typeof value === 'string' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
						error.push(`The ${field} field must be a valid email address.`);
					}
					break;

				case 'string':
					if (typeof value !== 'string') {
						error.push(`The ${field} field must be a string.`);
					}
					break;

				case 'maxLength':
					if (typeof value === 'string' && value.length > parseInt(params)) {
						error.push(`The ${field} field must not be greater than ${params} characters.`);
					}
					break;

				default:
					break;
			}
		}

		if (error.length) {
			errors[field] = error;
		}
	}

	return Object.keys(errors).length ? errors : null;
}
