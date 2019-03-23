import React from "react";
import {useContext} from 'react';

import {ReduxContext} from './../redux/index'

function Counter () {
	const {Store, Action} = useContext(ReduxContext);
  const {add} = Action && Action.user;
  const {data}=Store;
	return (
		<>
			Counter Count: {data}
			<button onClick={() => add('点击')}>点击</button>
		</>
	);
}

export default Counter;
