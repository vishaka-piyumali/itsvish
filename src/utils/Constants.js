export const ICONS = {
	FACEBOOK: 'fi-social-facebook',
	LINKEDIN: 'fi-social-linkedin',
	GITHUB: 'fi-social-github',
	LIKE: 'fi-like',
	WORK: 'fi-results',
	SKILLS: 'fi-database',
	CONTACT: 'fi-mail',
	EMAIL: 'fi-mail',
	HOME: 'fi-home',
	WEB: 'fi-web'
};

// using absolute paths for endpoints till I set up mocked responses
export const URLS = {
	READ_KUDOS_URL: '//www.itsvish.com/readKudos.php',
	SEND_KUDOS_URL: '//www.itsvish.com/sendKudos.php'
}

export const SOCIALLINKS = [{
		link: '//www.linkedin.com/in/vishaka-wele-uhulanage-6a196024/',
		desc: 'Linkedin',
		icon: ICONS.LINKEDIN
	},
	{
		link: '//github.com/vishaka-piyumali',
		desc: 'Github',
		icon: ICONS.GITHUB
	},
	{
		link: 'mailto:vishakapiyumali@gmail.com',
		desc: 'Linkedin',
		icon: ICONS.EMAIL
	},
	{
		link: 'www.itsvish.com',
		desc: 'Web',
		icon: ICONS.WEB
	}];