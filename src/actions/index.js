import axios from 'axios';

export function selectDemo (demo) {
	// selectDemo is an ActionCreator returning an action which is an object with type property
	return {
		type: 'DEMO_SELECTED',
		payload: demo
	}
}

const READ_URL = '//www.itsvish.com/readKudos.php';//?pageName=itsvish.com:home for home page
/*
 const API_KEY = "seqweasrwerwE";
 const READ_URL = `some.api.url.com/endpoint/?api_key=${API_KEY}`;
 */

export const FETCH_KUDOS = 'FETCH_KUDOS';

export function fetchKudos (pageName) {
	const url = `${READ_URL}?pageName=${pageName}`;
	const request = axios.get(url);

	console.log(request);

	return {
		type : FETCH_KUDOS,
		payload: request
	}
}