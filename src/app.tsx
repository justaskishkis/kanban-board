import React from 'react';
import {Provider} from 'react-redux';

import Navigator from './navigator';
import {getStore} from './store';

const App = () => (
	<Provider store={getStore()}>
		<Navigator/>
	</Provider>
);

export default App;
