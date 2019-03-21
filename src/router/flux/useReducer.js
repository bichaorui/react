import React from "react";
import {useState, useEffect} from 'react';

function useReducer(reducer, initialState) {
	const [state, setState] = useState(initialState);

	function dispatch(action) {
		console.log('___________useReducer', state, action)
		const nextState = reducer(state, action);
		setState(nextState);
	}

	return [state, dispatch];
}

export default useReducer;