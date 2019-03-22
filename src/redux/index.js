/*
* 统一组件通信.
* by: bichaorui
* */

import React from "react";
import {useState, useEffect, useContext} from 'react';

import store from './store'

const ReduxContext = React.createContext();
const {Provider} = ReduxContext;

const ProviderProps = (props) => {
	const [Store, Action] = store();
	return (
		<Provider value={{Store, Action}}>
			{props && props.children}
		</Provider>
	)
};

export {
	ProviderProps, // 插入
	ReduxContext, // 读取
}