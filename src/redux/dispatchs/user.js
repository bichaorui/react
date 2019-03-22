export default {
	'add': (state, data) => {
		return Object.assign({}, state, {
			data: data
		});
	}
}