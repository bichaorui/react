import React from "react";
import {useState} from 'react';

import dispatchs from './dispatchs'
import action from './actions/index'

const initialState = {
	user: {},
};

export default () => {
	const [state, setState] = useState(initialState);

	function dispatchFun(action) {
		const dispatchProps = dispatchs(state, action);
		console.log(dispatchProps);
		setState(dispatchProps)
	}

	const actions = action(dispatchFun);
	console.log(state);
	return [
		state,
		actions
	]

}










