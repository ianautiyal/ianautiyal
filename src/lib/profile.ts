import type { Profile } from '../app';

const profile: Profile = {
	name: 'Ajay Nautiyal',
	email: 'aju@nautiyal.dev',
	website: 'https://aju.nautiyal.dev',
	phone: '+91-9917878543',
	location: 'Dehradun, India',
	bio: 'Python | TypeScript | PHP | Dart Developer',

	skills: [
		{
			label: 'Languages',
			items: ['Python', 'TypeScript', 'JavaScript', 'PHP', 'Dart', 'SQL']
		},
		{
			label: 'Frameworks',
			items: ['Django', 'Next.js', 'NestJS', 'Laravel', 'Flutter']
		},
		{
			label: 'Libraries',
			items: ['React', 'Vue.js', 'Svelte', 'Tailwind CSS', 'Bootstrap']
		},
		{
			label: 'Dev Tools',
			items: ['Vite', 'Git', 'GitHub', 'Docker', 'VS Code', 'Postman', 'Figma']
		}
	],

	employments: [
		{
			title: 'Lead Developer',
			company: 'Bamko India Pvt. Ltd.',
			location: 'Dehradun, India',
			description:
				'Lead Developer at Bamko India Pvt Ltd with a strong background in e-commerce. Known for providing strategic direction, I lead a high-performing development team. Proficient in PHP, Laravel, and MySQL, I contribute hands-on coding expertise to ensure code quality. Experienced in project management, I collaborate with cross-functional teams for successful and timely delivery. Committed to innovation, I evaluate and implement the latest tools and technologies in e-commerce, such as microservices architecture and cloud computing. Thrive on fostering a collaborative team culture and empowering individual excellence. Proven track record of meeting and exceeding client expectations in the dynamic e-commerce industry.',
			startDate: 'October 2022'
		},
		{
			title: 'Senior PHP Developer',
			company: 'Bamko India Pvt. Ltd.',
			location: 'Dehradun, India',
			description:
				'Senior PHP Developer at Bamko India Pvt Ltd, specializing in crafting robust solutions for e-commerce. Adept at leading development teams, I provide strategic direction and hands-on coding expertise. Proven track record in project management, ensuring successful and timely deliveries. Committed to staying ahead of industry trends, I implement cutting-edge technologies to optimize development processes. Focused on fostering a collaborative team culture and empowering individual excellence.',
			startDate: 'September 2019',
			endDate: 'October 2022'
		},
		{
			title: 'PHP Developer',
			company: 'ArtisansSoft Pvt. Ltd.',
			location: 'Dehradun, India',
			description:
				'PHP Developer at ArtisansSoft Pvt Ltd, dedicated to creating innovative solutions in web development. Proficient in PHP development, I contribute to the success of projects through hands-on coding and a commitment to code quality. Experienced in collaborating with cross-functional teams for project delivery.',
			startDate: 'June 2018',
			endDate: 'September 2019'
		},
		{
			title: 'Software Engineer (PHP)',
			company: 'Rubico IT Pvt. Ltd.',
			location: 'Dehradun, India',
			description:
				'As a Software Engineer specializing in PHP at Rubico IT Pvt Ltd, I contribute to the dynamic world of software development. Proficient in PHP, I actively engage in coding and maintain a sharp focus on code quality. Collaborating with cross-functional teams, I ensure the successful delivery of projects. Keen on staying abreast of industry trends, I am committed to leveraging the latest technologies for optimal software solutions.',
			startDate: 'May 2017',
			endDate: 'May 2018'
		},
		{
			title: 'Network/Server Support Engineer',
			company: 'YogGram (A Unit of Patanjali Yogpeeth)',
			location: 'Haridwar, India',
			description:
				'In the role of Network/Server Support Engineer at YogGram, a unit of Patanjali Yogpeeth, I am dedicated to ensuring the seamless functioning of networks and servers. Adept at troubleshooting and providing timely support, I play a crucial role in maintaining a robust IT infrastructure. With a focus on network security and reliability, I contribute to the smooth operation of critical systems.',
			startDate: 'February 2014',
			endDate: 'April 2017'
		},
		{
			title: 'Project Support Engineer',
			company: 'Eagle Software Pvt. Ltd.',
			location: 'Uttarkashi, India',
			description:
				'As a Project Support Engineer at Eagle Software Pvt Ltd, I play a pivotal role in ensuring the success and efficiency of our projects. Proficient in project management and support methodologies, I collaborate with cross-functional teams to drive successful project outcomes. Dedicated to maintaining high standards of project documentation and communication, I facilitate seamless coordination between team members. With a keen eye for detail, I contribute to the identification and resolution of project-related challenges.',
			startDate: 'June 2010',
			endDate: 'March 2012'
		}
	],

	educations: [
		{
			title: 'Bachelor of Computer Application',
			college: 'Shobhit University',
			location: 'Pathankot, India',
			description:
				"Holder of a Bachelor's degree in Computer Application from Shobhit University, I have acquired a comprehensive foundation in computer science and technology. The program equipped me with a diverse skill set, fostering my ability to contribute effectively to the ever-evolving field of technology.",
			startYear: 2011,
			endYear: 2014
		},
		{
			title: 'Computer Software & Hardware Diploma',
			college: 'Excel Net Computer Education',
			location: 'Uttarkashi, India',
			description:
				'Diploma holder in Computer Software & Hardware from Excel Net Computer Education, I gained practical insights into software development and hardware management. This diploma has been instrumental in honing my technical proficiency and providing hands-on experience in the intricate world of computer systems.',
			startYear: 2010,
			endYear: 2011
		},
		{
			title: 'Intermediate',
			college: 'ASSS DDLT IC, (Uttarakhand Board)',
			location: 'Uttarkashi, India',
			description:
				'Completed my Intermediate education from ASSS DDLT IC under the Uttarakhand Board, where I cultivated a strong academic foundation. This stage of my education played a crucial role in shaping my analytical and critical thinking skills.',
			startYear: 2010,
			endYear: 2011
		},
		{
			title: 'High School',
			college: 'ASSS DDLT IC, (Uttarakhand Board)',
			location: 'Uttarkashi, India',
			description:
				'My educational journey commenced at ASSS DDLT IC, where I completed my High School education under the Uttarakhand Board. This foundational phase laid the groundwork for my academic and personal development, fostering a curiosity for learning and a commitment to excellence.',
			startYear: 2007,
			endYear: 2008
		}
	],

	social: {
		github: 'https://github.com/ianautiyal',
		linkedin: 'https://www.linkedin.com/in/ianautiyal',
		twitter: 'https://twitter.com/ianautiyal',
		instagram: 'https://www.instagram.com/ianautiyal'
	}
};

export default profile;
