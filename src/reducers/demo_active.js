
export default function (state = null, action) {
	switch (action.type) {
		case 'DEMO_SELECTED': return action.payload;
		default: return state;
	}

	//return state;
}