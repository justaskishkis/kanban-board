import rootReducer from '../rootReducer';

// yarn test ./src/__tests__/rootReducer.test.js --coverage
describe('rootReducer', () => {
	it('exists', () => {
		expect(typeof rootReducer).toEqual('function');
	});

	it('returns function if called', () => {
		expect(typeof rootReducer()).toEqual('function');
	});
});
