import sheets from '@googleapis/sheets';
import credentials from '../sa-credentials-file.json';

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

export async function writeToSpreadsheet(spreadsheetId: string, range: string, data: unknown[]) {
	const { spreadsheets } = sheets.sheets({
		version: 'v4',
		auth: new sheets.auth.GoogleAuth({
			credentials: credentials,
			scopes: ['https://www.googleapis.com/auth/spreadsheets']
		})
	});

	return new Promise((resolve, reject) =>
		spreadsheets.values.append(
			{
				spreadsheetId: spreadsheetId,
				range: range,
				valueInputOption: 'USER_ENTERED',
				insertDataOption: 'INSERT_ROWS',
				requestBody: { values: [data] }
			},
			(err, resp) => (err ? reject(err) : resolve(resp))
		)
	);
}
