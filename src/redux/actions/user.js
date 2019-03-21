//
export default (dispatchs, root) => {
	return {
		getList: (data) => {
			dispatchs({
				type: 'GETLIST',
				text: data,
			})
		}
	}
}
