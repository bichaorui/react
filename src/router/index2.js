import React from "react";
import {useState, useEffect} from 'react';

import Active from './flux/active';

function index2 () {
	const [store, actives] = Active();
	console.log('index2', store, actives);
	return (
		<div onClick={()=>actives.addList(312)}>index2</div>
	)
}

export default index2;