import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import autoCompleteApp from './reducers';
import rootEpic from './epic';
import { createEpicMiddleware } from 'redux-observable';

const epicMiddleware = createEpicMiddleware(rootEpic);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
	autoCompleteApp,
  applyMiddleware(epicMiddleware)
);

console.log(store);

ReactDOM.render(
	<Provider store={store}>
	  <App />
	</Provider>,
  document.getElementById('root'));
registerServiceWorker();
