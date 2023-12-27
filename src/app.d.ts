// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export interface Store {
	darkMode: boolean;
	asideOpen: boolean;
	navigation: 'loading' | 'loaded' | null;
}

export interface Skill {
	label: string;
	items: string[];
}

export interface Employment {
	title: string;
	company: string;
	location: string;
	description: string;
	startDate: string;
	endDate?: string;
}

export interface Education {
	title: string;
	college: string;
	location: string;
	description: string;
	startYear: number;
	endYear: number;
}

export interface Social {
	github: string;
	linkedin: string;
	twitter: string;
	instagram: string;
}

export interface Profile {
	name: string;
	email: string;
	website: string;
	phone: string;
	location: string;
	bio: string;
	skills: Skill[];
	employments: Employment[];
	educations: Education[];
	social: Social;
}

export {};
