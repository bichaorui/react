import userAction from './user';
import appAction from './app';

const dispatch = {
	...userAction,
	...appAction,
};

export default (state, action) => {
	const {DATA, TYPE} = action;
	return dispatch[TYPE](state, DATA)
}