
export default (state, action) => {
	console.log('__________dispatchs', state, action);
	switch (action.type) {
		case 'add':
			return [...state, {
				text: action.text,
				completed: false
			}];
		case 'GETLIST':
			return ['1','2'];
			// return [...state, {
			// 	text: action.text,
			// 	completed: false
			// }];
		default:
			return state;
	}
}