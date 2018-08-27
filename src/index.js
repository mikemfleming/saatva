import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { compose, createStore, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { ConnectedRouter } from 'connected-react-router';

import App from './components/App';
import reducer from './reducers';
import { initialState } from './constants';

const history = createBrowserHistory();

const store = createStore(
	connectRouter(history)(reducer),
	initialState,
	compose(
		applyMiddleware(routerMiddleware(history), thunk)
	)
);

ReactDOM.render(
	<Provider store={store} >
		<ConnectedRouter history={history}>
			<App />
		</ConnectedRouter>
	</Provider>,
	document.getElementById('root')
);
