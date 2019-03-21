import React from "react";
import {useState, useEffect, useContext} from 'react';

import Active from './flux/active';

import index2 from './index2'

function APP () {
	const [store, actives] = Active();
	console.log('index1', store, actives);
	const APP2 = index2();

	/*----------*/
	// const {Provider} = React.createContext();
	// console.log(Provider);
	/*----------*/
	return (
		<div className="APP">
			{store.length}
			<button onClick={() => actives.addList(123)}>点击</button>
			{APP2}
		</div>
	)
}

export default APP;
