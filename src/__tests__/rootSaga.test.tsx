import {all} from 'redux-saga/effects';

import {watchHomeSagas} from '../containers/home/sagas';
import rootSaga from '../rootSaga';

// yarn test ./src/__tests__/rootSaga.test.js --coverage
describe('rootSaga', () => {
	it('starts to watch Sagas', () => {
		const generator = rootSaga();
		expect(generator.next().value)
			.toEqual(all([
				watchHomeSagas(),
			]));
		expect(generator.next().done).toEqual(true);
	});
});
