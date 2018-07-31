export function selectDemo (demo) {
	// selectDemo is an ActionCreator returning an action which is an object with type property
	return {
		type: 'DEMO_SELECTED',
		payload: demo
	}
}