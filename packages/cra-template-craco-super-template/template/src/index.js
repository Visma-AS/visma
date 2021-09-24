import App from 'components/App';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

async function main() {
  if (process.env.REACT_APP_MOCK === 'msw') {
    const { worker } = await import('mocks/browser');
    worker.start({
      onUnhandledRequest: 'bypass',
    });
  }
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );

  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();
}

main();
