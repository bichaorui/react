
import todosReducer from './todosReducer';
import useReducer from './useReducer';

function dispatcherActive (text) {
	const [todos, dispatch] = useReducer(todosReducer, []);

	return {
		addActive: dispatch({
			type: 'add',
		})
	}
}

export default dispatcherActive;