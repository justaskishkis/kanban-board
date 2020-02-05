import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router'
import homeReducer from './containers/home/reducer';

// TODO: all any
export default function rootReducer(history?: any) {
	return combineReducers({
		router: connectRouter(history),
		home: homeReducer,
	});
}
