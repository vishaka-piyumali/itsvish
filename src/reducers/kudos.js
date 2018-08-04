import { FETCH_KUDOS } from '../actions';

export default function ( state = null, action) {
	console.log('action received: ' + action.type + ' payload : ' + action.payload);
	switch (action.type) {
		case FETCH_KUDOS : return action.payload.data[0].kudos || 0;
		default : return null;
	}
}