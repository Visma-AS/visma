import React from 'react';
import ReactDOM from 'react-dom';
import 'todomvc-app-css/index.css';
import 'todomvc-common/base.css';
import App from './App';

if (
  typeof window !== 'undefined' &&
  window.document &&
  process.env.NODE_ENV === 'development' // &&
  // process.env.REACT_APP_MOCK === 'msw'
) {
  const { worker } = require('./mocks/browser');
  worker.start();
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
