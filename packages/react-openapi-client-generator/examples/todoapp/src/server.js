import { CacheContext } from '@postinumero/use-async/mjs/cache';
import express from 'express';
import fs from 'fs';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import ssrPrepass from 'react-ssr-prepass';
import { homepage } from '../package.json';
import App from './App';

const PORT = process.env.PORT || 3000;
const app = express();

var router = express.Router();

app.use(homepage, router);

async function handleRender(req, res) {
  function Router(props) {
    return <StaticRouter location={req.url} {...props} />;
  }

  const element = (
    <CacheContext.Provider value={new WeakMap()}>
      <App Router={Router} />
    </CacheContext.Provider>
  );

  await ssrPrepass(element);
  const app = ReactDOMServer.renderToString(element);

  const indexFile = path.resolve('./build/index.html');
  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Something went wrong:', err);
      return res.status(500).send('Oops, better luck next time!');
    }

    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
    );
  });
}

async function main() {
  // if (
  //   process.env.NODE_ENV === 'development' &&
  //   process.env.REACT_APP_MOCK === 'msw'
  // ) {
  const { server } = await import('./mocks/server');
  server.listen();
  // }

  router.get(
    '*',
    function (req, res, next) {
      if (req.path.includes('.server') || req.path.includes('/index.html')) {
        next('route');
      } else {
        next();
      }
    },
    express.static('./build', {
      index: false,
    })
  );

  router.get('*', handleRender);

  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
}

main();
