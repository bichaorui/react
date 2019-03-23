import React from "react";
import {useContext} from 'react';

import {ReduxContext} from './../redux/index'


function Counter () {
	const {Action} = useContext(ReduxContext);
	const {add = () => {}} = Action && Action;
	return (
		<div>
			Counter Count:
			<button onClick={() => add('点击')}>点击</button>
		</div>
	);
}

export default Counter;
