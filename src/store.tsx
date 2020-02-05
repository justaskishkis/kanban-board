import {compose, createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {routerMiddleware} from 'connected-react-router'
import createHistory from 'history/createBrowserHistory';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

export interface IRdx {
	initialState: any;
	enhancers: any;
	history: any;
	store: any;
	createHistory: any;
	sagaMiddleware: any;
	createSagaMiddleware: any;
	middleware: any;
	routerMiddleware: any;
	appliedMiddleware: any;
	compose: any;
	composedEnhancers: any;
	applyMiddleware: any;
	createStore: any;
	rootReducer: any;
	rootSaga: any;
	configureStore?: any;
	getStore?: any;
	getHistory? : any;
}

export const rdx: IRdx = {
	initialState: {},
	enhancers: [],
	history: undefined,
	store: undefined,
	createHistory,
	sagaMiddleware: undefined,
	createSagaMiddleware,
	middleware: undefined,
	routerMiddleware,
	appliedMiddleware: undefined,
	compose,
	composedEnhancers: undefined,
	applyMiddleware,
	createStore,
	rootReducer,
	rootSaga,
};

export default function configureStore() {
	rdx.history = rdx.createHistory();

	rdx.sagaMiddleware = rdx.createSagaMiddleware();
	rdx.middleware = [
		rdx.sagaMiddleware,
		rdx.routerMiddleware(rdx.history),
	];

	if (process.env.NODE_ENV === 'development') {
		const {devToolsExtension} = window as any;
		if (typeof devToolsExtension === 'function') {
			rdx.enhancers.push(devToolsExtension());
		}
	}

	rdx.appliedMiddleware = rdx.applyMiddleware(...rdx.middleware);
	rdx.composedEnhancers = rdx.compose(
		rdx.appliedMiddleware,
		...rdx.enhancers,
	);

	rdx.store = rdx.createStore(
		rdx.rootReducer(rdx.history),
		rdx.initialState,
		rdx.composedEnhancers,
	);

	rdx.sagaMiddleware.run(rdx.rootSaga);
}
rdx.configureStore = configureStore;

export function getStore() {
	if (!rdx.store) {
		rdx.configureStore();
	}
	return rdx.store;
}

rdx.getStore = getStore;

export function getHistory() {
	return rdx.history;
}

rdx.getHistory = getHistory;
