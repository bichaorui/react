import todosReducer from './todosReducer';
import useReducer from './useReducer';

function Actives (Component) {
	const [store, dispatch] = useReducer(todosReducer, []);

	// const rudeux = [
	// 	store,
	// 	{
	// 		addList: (e) => {
	// 			console.log('____________active', e);
	// 			dispatch({type: 'add', e});
	// 		},
	// 		/* more active */
	// 	}
	// ]

	return [
		store,
		{
			addList: (e) => {
				console.log('____________active', e);
				dispatch({type: 'add', text: e});
			},
			/* more active */
		}
	]
}

export default Actives;