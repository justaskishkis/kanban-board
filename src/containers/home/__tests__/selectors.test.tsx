import {selectHome, makeSelectData} from '../selectors';

// yarn test ./src/containers/home/__tests__/selectors.test.js --coverage
describe('<Home /> selectors', () => {
	describe('selectHome', () => {
		it('should select the home state', () => {
			const homeState = {
				data: {},
			};
			const mockedState = {
				home: homeState,
			};
			expect(selectHome(mockedState)).toEqual(homeState);
		});
	});

	describe('makeSelectData', () => {
		const dataSelector = makeSelectData();
		it('should select the data', () => {
			const data = {foo: 'bar'};
			const mockedState = {
				home: {
					data,
				},
			};
			expect(dataSelector(mockedState)).toEqual(data);
		});
	});
});
