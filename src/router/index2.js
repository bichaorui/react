import React from "react";
import {useState, useEffect, createContext} from 'react';

import Active from './flux/active';

function index2 () {
	const [store, actives] = Active();
	console.log('index2', store, actives);

	const {Consumer} = createContext();
	console.log(Consumer);
	return (
		<Consumer>
			{
				(e) => {
					console.log('____________Consumer', e);
					return <div  onClick={()=>actives.addList(312)}>index2</div>
				}
			}
		</Consumer>
	)
}

export default index2;