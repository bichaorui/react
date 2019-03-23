import {useState} from 'react';

import action from './actions/index';
import dispatchs from './dispatchs/index';

let initialState = {
	user: {
		name: 'jack'
	}
};

export default () => {
	const [state, setState] = useState(initialState);

	const actions = action((action) => {
		const dispatchProps = dispatchs(state, action);
		setState(dispatchProps)
	});
	return [
		state,
		actions
	]
}