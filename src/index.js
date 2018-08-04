import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import reducers from './reducers';
import App from './apps/App';

import { Route, HashRouter  } from 'react-router-dom';

const createStoreFromReducers = applyMiddleware (ReduxPromise)(createStore);

ReactDOM.render((
	<Provider store={createStoreFromReducers(reducers)}>
		<HashRouter>
			<Route component={App} />
		</HashRouter>
	</Provider>
), document.getElementById('root'));
