import axios from 'axios';

export function selectDemo (demo) {
	// selectDemo is an ActionCreator returning an action which is an object with type property
	return {
		type: 'DEMO_SELECTED',
		payload: demo
	}
}

const READ_KUDOS_URL = '//www.itsvish.com/readKudos.php';//?pageName=itsvish.com:home for home page
const READ_ALL_KUDOS_URL = '//www.itsvish.com/readKudos.php';
const SEND_KUDOS_URL = '//www.itsvish.com/sendKudos.php';

/*
 const API_KEY = "seqweasrwerwE";
 const READ_URL = `some.api.url.com/endpoint/?api_key=${API_KEY}`;
 */

export const FETCH_KUDOS = 'FETCH_KUDOS';

export const SEND_KUDOS = 'SEND_KUDOS';

export const FETCH_ALL_KUDOS = 'FETCH_ALL_KUDOS';

export const FETCH_DEMO_KUDOS = 'FETCH_DEMO_KUDOS';

export function fetchAllKudos () {
	const url = `${READ_ALL_KUDOS_URL}`;
	const request = axios.get(url);

	return {
		type : FETCH_ALL_KUDOS,
		payload: request
	}
}

export function fetchKudos (pageName) {
	const url = `${READ_KUDOS_URL}?pageName=${pageName}`;
	const request = axios.get(url);

	return {
		type : FETCH_KUDOS,
		payload: request
	}
}

export function sendKudos (pageName) {
	const url = `${SEND_KUDOS_URL}?pageName=${pageName}`;
	const request = axios.get(url);

	return {
		type : SEND_KUDOS,
		payload: request
	}
}

export function fetchKudosForDemos () {
	const url = `${READ_ALL_KUDOS_URL}`;
	const request = axios.get(url);

	return {
		type : FETCH_DEMO_KUDOS,
		payload: request
	}
}