import React from "react";
import {useState, useEffect, useContext} from 'react';

import {ReduxContext} from './../redux/index'


function Counter () {
	const {Store, Action} = useContext(ReduxContext);
	console.log(Store, Action);
	const {add = () => {}} = Action && Action;
	return (
		<div>
			Counter Count:
			<button onClick={() => add('点击')}>点击</button>
		</div>
	);
}

export default Counter;
