import userAction from './user';

export default (dispatchFun) => {
	return {
		user: userAction(dispatchFun, 'user')
	}
}