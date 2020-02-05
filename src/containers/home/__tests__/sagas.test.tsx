import {call, put, takeEvery} from 'redux-saga/effects';
import axios from 'axios';
import {fetchDataAsync, watchHomeSagas} from '../sagas';
import {actionType} from '../reducer';

// yarn test ./src/containers/home/__tests__/sagas.test.js --coverage
describe('<Home /> sagas', () => {
	describe('fetchDataAsync', () => {
		it('ends with fetchDataSuccess if successful API call', () => {
			const generator = fetchDataAsync(); // {type: actionType.FETCH_DATA_ASYNC}

			const url = 'https://api.github.com';
			expect(generator.next().value).toEqual(call(axios.get, url));

			const resultsMock = {data: {foo: 'bar'}};
			expect(generator.next(resultsMock).value)
				.toEqual(put({
					type: actionType.FETCH_DATA_SUCCESS,
					payload: {results: resultsMock},
				}));

			expect(generator.next().done).toEqual(true);
		});

		it('ends with fetchDataSuccess if successful API call', () => {
			const generator = fetchDataAsync(); // {type: actionType.FETCH_DATA_ASYNC}

			const url = 'https://api.github.com';
			expect(generator.next().value).toEqual(call(axios.get, url));

			const error = {foo: 'bar'};
			expect(generator.throw(error).value)
				.toEqual(put({type: actionType.FETCH_DATA_FAILURE, payload: error}));

			expect(generator.next().done).toEqual(true);
		});
	});

	describe('watchHomeSagas', () => {
		it('listens on FETCH_DATA_ASYNC to fire fetchDataAsync', () => {
			const generator = watchHomeSagas();

			expect(generator.next().value)
				.toEqual(takeEvery(actionType.FETCH_DATA_ASYNC, fetchDataAsync));

			expect(generator.next().done).toEqual(true);
		});
	});
});
