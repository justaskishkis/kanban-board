/* eslint-disable max-len */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import {mount} from 'enzyme';
import Home from '../Home';

// yarn test ./src/containers/home/__tests__/Home.test.js --coverage
describe('<Home />', () => {
	const propsMock = {
		data: {foo: 'bar'},
		fetchData: jest.fn(),
	};
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<Home {...propsMock} />, div);
	});

	it('matches the snapshot', () => {
		const componentSnapShot = renderer
			.create(<Home {...propsMock} />)
			.toJSON();
		expect(componentSnapShot).toMatchSnapshot();
	});

	it('has data-test-id home-container"', () => {
		const wrapper = mount(<Home {...propsMock} />);
		expect(wrapper.find('.home-container').prop('data-test-id'))
			.toEqual('home-container');
	});
});
