import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Home extends Component {
	public static propTypes = {};

	componentDidMount() {
		const {fetchData} = this.props as any;
		fetchData();
	}

	render() {
		const {data} = this.props as any;
		return (
			<div className="home-container" data-test-id="home-container">
				<p>
					Hello
				</p>
				<ul>
					{
						Object.keys(data).map(key => (
							<li key={key}>
								<span>{key}</span>
								<span>:</span>
								<span>{data[key]}</span>
							</li>
						))
					}
				</ul>
			</div>
		);
	}
}

Home.propTypes = {
	data: PropTypes.any,
	fetchData: PropTypes.func,
};

export default Home;
