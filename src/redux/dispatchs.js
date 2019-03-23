
export default (state, action) => {
	const {DATA, TYPE} = action;
	switch (TYPE) {
		case 'add':
			return [...state, {
				data: DATA,
				completed: false
			}];
		case 'ADD':
			return Object.assign({}, state, {
				data: DATA
			});
		default:
			return state;
	}
}
