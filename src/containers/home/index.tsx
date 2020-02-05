import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {actionType} from './reducer';
import * as selector from './selectors';
import Home from './Home';

export const mapStateToProps = createStructuredSelector({
	data: selector.makeSelectData(),
});

export const mapDispatchToProps = (dispatch: any) => ({
	fetchData: () => dispatch({
		type: actionType.FETCH_DATA_ASYNC,
	}),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Home);
