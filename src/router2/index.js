import React from "react";
import {useState, useEffect, useContext} from 'react';

import {ProviderProps} from './../redux/index'

import Index2 from './index2'

export default () => {
	return (
		<ProviderProps>
			<div>
				123
				<Index2></Index2>
			</div>
		</ProviderProps>
	)
}