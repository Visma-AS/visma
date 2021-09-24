import AppProvider from '@visma/react-app-super-template';
import { FormattedMessage, useIntl } from 'react-intl';
import logo from '../logo.svg';
import './App.css';
import Info from './Info';

export default function App() {
  return (
    <AppProvider fallback={null}>
      <div className="App">
        <header className="App-header">
          <Image />
          <p>
            <FormattedMessage
              defaultMessage="Edit <code>src/App.js</code> and save to reload."
              values={{
                code: (chunks) => <code>{chunks}</code>,
              }}
            />
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FormattedMessage defaultMessage="Learn React" />
          </a>
          <p>
            <Info />
          </p>
        </header>
      </div>
    </AppProvider>
  );
}

function Image() {
  const intl = useIntl();

  return (
    <img
      src={logo}
      className="App-logo"
      alt={intl.formatMessage({ defaultMessage: 'logo' })}
    />
  );
}
