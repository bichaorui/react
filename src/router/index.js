import React from "react";
import {useState, useEffect} from 'react';

import Active from './flux/active';
import index2 from './index2'
import Context from './context'
function APP () {
	// const [store, actives] = Active();
	// console.log('index1', store, actives);
	// const APP2 = index2();
	return (
		<Context.Provider >
			<div className="APP">
				{/*{store.length}*/}
				{/*<button onClick={()=>actives.addList(123)}>点击</button>*/}
				{/*{APP2}*/}
			</div>
		</Context.Provider >
	)
}

export default APP;
