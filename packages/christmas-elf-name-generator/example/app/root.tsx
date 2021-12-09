import * as React from 'react';
import type { LinksFunction } from 'remix';
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from 'remix';
import globalStylesUrl from '~/styles/global.css';

export let links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: globalStylesUrl }];
};

export default function App() {
  return (
    <Document>
      <div className="app">
        <Layout>
          <Outlet />
        </Layout>
      </div>
    </Document>
  );
}

function Document({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        {title ? <title>{title}</title> : null}
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <RouteChangeAnnouncement />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  );
}

function Layout({ children }: React.PropsWithChildren<{}>) {
  return (
    <>
      <header>
        <div className="container">
          <span></span>
          <nav aria-label="Main navigation">
            <ul>
              <li>
                <Link to="/visma/christmas-elf-name-generator">Home</Link>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://github.com/Visma-AS/visma/tree/main/packages/christmas-elf-name-generator"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://remix.run/docs"
                >
                  Remix Docs
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="container">
        <div className="christmas-tree">🎄</div>
        {children}
      </main>
      <footer>
        <p>
          &copy;{' '}
          <a rel="noopener noreferrer" target="_blank" href="https://visma.com">
            Visma
          </a>
        </p>
      </footer>
    </>
  );
}

/**
 * Provides an alert for screen reader users when the route changes.
 */
const RouteChangeAnnouncement = React.memo(() => {
  let [hydrated, setHydrated] = React.useState(false);
  let [innerHtml, setInnerHtml] = React.useState('');
  let location = useLocation();

  React.useEffect(() => {
    setHydrated(true);
  }, []);

  let firstRenderRef = React.useRef(true);
  React.useEffect(() => {
    // Skip the first render because we don't want an announcement on the
    // initial page load.
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }

    let pageTitle = location.pathname === '/' ? 'Home page' : document.title;
    setInnerHtml(`Navigated to ${pageTitle}`);
  }, [location.pathname]);

  // Render nothing on the server. The live region provides no value unless
  // scripts are loaded and the browser takes over normal routing.
  if (!hydrated) {
    return null;
  }

  return (
    <div
      aria-live="assertive"
      aria-atomic
      id="route-change-region"
      style={{
        border: '0',
        clipPath: 'inset(100%)',
        clip: 'rect(0 0 0 0)',
        height: '1px',
        margin: '-1px',
        overflow: 'hidden',
        padding: '0',
        position: 'absolute',
        width: '1px',
        whiteSpace: 'nowrap',
        wordWrap: 'normal',
      }}
    >
      {innerHtml}
    </div>
  );
});
