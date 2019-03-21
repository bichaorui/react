import React from "react";
import {useState, useEffect} from 'react';


function todosReducer(state, action) {
	console.log('________todosReducer', state, action)
	switch (action.type) {
		case 'add':
			return [...state, {
				text: action.text,
				completed: false
			}];
		case 'GETLIST':
			return [...state, {
				text: action.text,
				completed: false
			}];
		default:
			return state;
	}
}

export default todosReducer;