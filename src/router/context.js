import React from "react";
import {useState, useEffect} from 'react';
import Active from './flux/active';
const [store, actives] = Active();

export const Context = React.createContext(
	store,
	actives,
);