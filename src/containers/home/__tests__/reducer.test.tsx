import homeReducer, {actionType} from '../reducer';

// yarn test ./src/containers/home/__tests__/reducer.test.js --coverage
describe('<Home /> reducer', () => {
	let state: any;
	beforeEach(() => {
		state = {
			data: {},
		};
	});

	it('should return the initial state', () => {
		const expectedResult = state;
		expect(homeReducer(undefined, {}))
			.toEqual(expectedResult);
	});

	it('should handle the fetchDataSuccess action correctly', () => {
		const fixture = {data: {foo: 'bar'}};
		const expectedResult = {
			data: fixture.data,
		};

		expect(homeReducer(state, {
			type: actionType.FETCH_DATA_SUCCESS,
			payload: {results: fixture},
		}))
			.toEqual(expectedResult);
	});
});
