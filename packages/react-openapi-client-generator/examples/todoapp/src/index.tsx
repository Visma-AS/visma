import React from 'react';
import ReactDOM from 'react-dom';
import 'todomvc-app-css/index.css';
import 'todomvc-common/base.css';
import App, { basename } from './App';

async function main() {
  if (
    typeof window !== 'undefined' &&
    window.document // &&
    // process.env.NODE_ENV === 'development' &&
    // process.env.REACT_APP_MOCK === 'msw'
  ) {
    if (
      basename &&
      window.location.pathname === basename &&
      !window.location.pathname.endsWith('/')
    ) {
      window.location.pathname = `${window.location.pathname}/`;
      return;
    }

    const { worker } = await import('./mocks/browser');
    await worker.start(
      basename
        ? {
            serviceWorker: {
              url: `${basename}/mockServiceWorker.js`,
            },
          }
        : undefined
    );
  }

  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

main();
