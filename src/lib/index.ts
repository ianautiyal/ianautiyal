export function validateFormData<K extends string>(
	data: Record<K, unknown>,
	rules: Record<K, string[]>
) {
	const errors = {} as Record<K, string[]>;

	for (const field in rules) {
		const error = [];

		for (const _rule of rules[field]) {
			const [rule, params] = _rule.split(':');
			if (rule === 'required' && !data[field]) {
				error.push(`The ${field} field is required.`);
			} else if (
				rule === 'email' &&
				typeof data[field] === 'string' &&
				!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data[field])
			) {
				error.push(`The ${field} field must be a valid email address.`);
			} else if (rule === 'string' && typeof data[field] !== 'string') {
				error.push(`The ${field}  field must be a string.`);
			} else if (
				rule === 'maxLength' &&
				typeof data[field] === 'string' &&
				data[field].length > parseInt(params)
			) {
				error.push(`The ${field} field must not be greater than ${params} characters.`);
			}
		}

		if (error.length) {
			errors[field] = error;
		}
	}

	return Object.keys(errors).length ? errors : null;
}