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
				'link': 'http://chatbot.itsvish.com',
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
				'link': 'http://weatherwidget.itsvish.com',
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
				'link': 'http://hcardbuilder.itsvish.com',
				'thumbnail': '/assets/images/demos/vcard-thumb.png',
				'sourceCode': 'https://github.com/vishaka-piyumali/hcard-builder',
				'linkDesc': 'Live Demo',
				'techStack': ['React JS Framework', 'SCSS', 'Foundation'],
				'heroTechImage': '/assets/images/skills/react.png',
				'heroTechText': 'React Js'
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