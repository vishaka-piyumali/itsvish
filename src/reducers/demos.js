import _ from 'lodash';

import { FETCH_DEMO_KUDOS } from '../actions';

let demos = () => (
		[
			{
				'title': 'Small Talk Chat Bot',
				'id': 'itsvish.com:demo:chat-bot',
				'description': 'This is a smart chat bot ui, integrated with dialogflow smalltalk agent.',
				'date': 'August 2018',
				'liked': window.localStorage.getItem('itsvish.com:demo:chat-bot') === 'true' || false,
				'link': '/demos/smalltalk-chatbot',
				'thumbnail': '/assets/images/demos/chatbot-thumb2.png',
				'sourceCode': 'https://github.com/vishaka-piyumali/smalltalk-chatbot',
				'linkDesc': 'Live Demo',
				'techStack': ['React JS Framework', 'Google Dialogflow', 'Javascrip Api Ai'],
				'heroTechImage': '/assets/images/skills/dialogflow.png',
				'heroTechText': 'Google Dialogflow'
			},
			{
				'title': 'Weather Widget',
				'id': 'itsvish.com:demo:weather-widget',
				'liked': window.localStorage.getItem('itsvish.com:demo:weather-widget') === 'true' || false,
				'description': 'Web implementation of openweather api to display the current weather status based on the current geo location.',
				'date': 'July 2018',
				'link': '/demos/weatherwidget',
				'thumbnail': '/assets/images/demos/weather-thumb1.png',
				'sourceCode': 'https://github.com/vishaka-piyumali/weather-widget',
				'linkDesc': 'Live Demo',
				'techStack': ['React JS Framework', 'Open Weather API integration', 'Webpack', 'Jest'],
				'heroTechImage': '/assets/images/skills/react.png',
				'heroTechText': 'React Js'
			},
			{
				'title': 'HCard Builder',
				'id': 'itsvish.com:demo:hcard-builder',
				'liked': window.localStorage.getItem('itsvish.com:demo:hcard-builder') === 'true' || false,
				'description': 'This beautiful widget allows you to input and preview data for a vcard.',
				'date': 'June 2018',
				'link': '/demos/hcardbuilder',
				'thumbnail': '/assets/images/demos/vcard-thumb.png',
				'sourceCode': 'https://github.com/vishaka-piyumali/hcard-builder',
				'linkDesc': 'Live Demo',
				'techStack': ['React JS Framework', 'SCSS', 'Foundation'],
				'heroTechImage': '/assets/images/skills/react.png',
				'heroTechText': 'React Js'
			},
			{
				'title': 'Online Portfolio',
				'id': 'itsvish.com:demo:itsvish-v2',
				'liked': window.localStorage.getItem('itsvish.com:demo:itsvish-v2') === 'true' || false,
				'description': 'This is my online portfolio which you are looking at now is also designed and developed by myself.',
				'date': 'August 2018',
				'link': '/demos/smalltalk-chatbot',
				'thumbnail': '/assets/images/demos/portfolio-thumb.png',
				'sourceCode': 'https://github.com/vishaka-piyumali/itsvish',
				'linkDesc': 'Live Demo',
				'techStack': ['React JS Framework', 'React Redux', 'React axios'],
				'heroTechImage': '/assets/images/skills/react.png',
				'heroTechText': 'React Js'
			},
			{
				'title': 'Legacy Online Portfolio',
				'id': 'itsvish.com:demo:itsvish-v1',
				'liked': window.localStorage.getItem('itsvish.com:demo:itsvish-v1') === 'true' || false,
				'description': 'This is my old online portfolio which is designed and developed by myself.',
				'date': 'April 2018',
				'link': '/demos/legacy-portfolio',
				'thumbnail': '/assets/images/demos/portfolio-thumb-legacy.png',
				'sourceCode': 'https://github.com/vishaka-piyumali/portfolio',
				'linkDesc': 'Live Demo',
				'techStack': ['Ractive JS Framework', 'SASS', 'Gulp', 'Node Js'],
				'heroTechImage': '/assets/images/skills/ractive.png',
				'heroTechText': 'Ractive Js'
			}
		]
);

export default function ( state = {}, action) {
	console.log('action received: ' + action.type + ' payload : ' + action.payload);
	switch (action.type) {
		case FETCH_DEMO_KUDOS: {
			return _.merge({} , _.sortBy(demos(), ['id']), action.payload.data);
		}
		default : return null;
	}
}