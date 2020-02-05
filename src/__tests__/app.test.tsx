import React from 'react';
import ReactDOM from 'react-dom';
import App from '../app';

// yarn test ./src/__tests__/App.test.js --coverage
describe('<App />', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<App/>, div);
	});
});
