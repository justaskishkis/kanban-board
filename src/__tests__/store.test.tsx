import {rdx, getStore, getHistory} from '../store';

// yarn test ./src/__tests__/store.test.js --coverage
describe('getStore', () => {
	it('creates store', () => {
		rdx.configureStore();
		rdx.getStore();
		expect(typeof rdx.store.dispatch).toEqual('function');
		expect(typeof rdx.store.subscribe).toEqual('function');
		expect(typeof rdx.store.getState).toEqual('function');
	});

	// TODO, fix
	// it('calls all required methods to create store in "development" environment', () => {
	// 	const prevEnv = process.env.NODE_ENV;
	// 	process.env.NODE_ENV = 'development';
	// 	Object.defineProperty(window, 'devToolsExtension', {
	// 		writable: true,
	// 		value: jest.fn(),
	// 	});
	// 	const historyMock = 'history';
	// 	rdx.createHistory = jest.fn().mockReturnValue(historyMock);
	// 	rdx.createSagaMiddleware = jest.fn().mockReturnValue({run: jest.fn()});
	// 	rdx.routerMiddleware = jest.fn();
	// 	rdx.applyMiddleware = jest.fn();
	// 	rdx.compose = jest.fn();
	// 	rdx.createStore = jest.fn();
	// 	rdx.rootReducer = jest.fn();
	// 	rdx.rootSaga = jest.fn();
	//
	// 	rdx.configureStore();
	// 	expect(rdx.createHistory).toHaveBeenCalled();
	// 	expect(rdx.history).toEqual(historyMock);
	// 	expect(rdx.createSagaMiddleware).toHaveBeenCalled();
	// 	expect(rdx.routerMiddleware).toHaveBeenCalled();
	//
	// 	expect(window.devToolsExtension).toHaveBeenCalled();
	//
	// 	expect(rdx.applyMiddleware).toHaveBeenCalled();
	// 	expect(rdx.compose).toHaveBeenCalled();
	// 	expect(rdx.createStore).toHaveBeenCalled();
	// 	expect(rdx.sagaMiddleware.run).toHaveBeenCalled();
	// 	process.env.NODE_ENV = prevEnv;
	// });

	// TODO, fix
	// it('does not add devToolsExtension if it is not function', () => {
	// 	const prevEnv = process.env.NODE_ENV;
	// 	process.env.NODE_ENV = 'development';
	// 	Object.defineProperty(window, 'devToolsExtension', {
	// 		writable: true,
	// 		value: 'foo',
	// 	});
	// 	const historyMock = 'history';
	// 	rdx.createHistory = jest.fn().mockReturnValue(historyMock);
	// 	rdx.createSagaMiddleware = jest.fn().mockReturnValue({run: jest.fn()});
	// 	rdx.routerMiddleware = jest.fn();
	// 	rdx.applyMiddleware = jest.fn();
	// 	rdx.compose = jest.fn();
	// 	rdx.createStore = jest.fn();
	// 	rdx.rootReducer = jest.fn();
	// 	rdx.rootSaga = jest.fn();
	// 	rdx.enhancers.push = jest.fn();
	// 	rdx.configureStore();
	// 	expect(rdx.enhancers.push).not.toHaveBeenCalled();
	// 	process.env.NODE_ENV = prevEnv;
	// });

	it('creates store if getStore being called and no store exists', () => {
		rdx.configureStore = jest.fn();
		getStore();
		expect(rdx.configureStore).toHaveBeenCalled();
	});

	it('does not create store if getStore being called and store exists', () => {
		rdx.store = 'foo';
		rdx.configureStore = jest.fn();
		getStore();
		expect(rdx.configureStore).not.toHaveBeenCalled();
	});

	it('returns history if getHistory is called', () => {
		rdx.history = 'foo';
		expect(getHistory()).toEqual(rdx.history);
	});
});
