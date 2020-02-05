/* eslint-disable max-len */
import {actionType} from '../reducer';
import Home, {mapStateToProps, mapDispatchToProps} from '../index';

// yarn test ./src/containers/home/__tests__/index.test.js --coverage
describe('<Home /> Connected', () => {
	it('should export default connected <Home />', () => {
		expect(Home.displayName)
			.toEqual('Connect(Home)');
	});

	it('should have mapStateToProps defined', () => {
		expect(typeof mapStateToProps).toEqual('function');
	});

	it('should have mapDispatchToProps defined', () => {
		expect(typeof mapDispatchToProps).toEqual('function');
	});

	it('should dispatch action fetchDataAsync when fetchData is being called', () => {
		const dispatchMock = jest.fn();
		mapDispatchToProps(dispatchMock).fetchData();
		expect(dispatchMock).toBeCalledWith({
			type: actionType.FETCH_DATA_ASYNC,
		});
	});
});
