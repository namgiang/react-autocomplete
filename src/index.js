import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

/* create a store with epicMiddleware */
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import autoCompleteApp from './reducers';
import rootEpic from './epics';
import { createEpicMiddleware } from 'redux-observable';

const epicMiddleware = createEpicMiddleware(rootEpic);
const store = createStore(
	autoCompleteApp,
  applyMiddleware(epicMiddleware)
);

ReactDOM.render(
	<Provider store={store}>
	  <App />
	</Provider>,
  document.getElementById('root'));
registerServiceWorker();
