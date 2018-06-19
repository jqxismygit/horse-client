import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import registerServiceWorker from './registerServiceWorker';


const store = createStore(rootReducer)

// console.log(locales);

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
