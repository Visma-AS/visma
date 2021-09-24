import AppProvider from '@visma/react-app-super-template';
import { IntlProvider } from '@visma/react-intl-bundled-messages';
import { FormattedMessage, useIntl } from 'react-intl';
import logo from '../logo.svg';
import './App.css';
import Info from './Info';

function App() {
  const intl = useIntl();

  return (
    <AppProvider fallback={null}>
      <IntlProvider>
        <div className="App">
          <header className="App-header">
            <img
              src={logo}
              className="App-logo"
              alt={intl.formatMessage({ defaultMessage: 'logo' })}
            />
            <p>
              <FormattedMessage defaultMessage="Edit <code>src/App.js</code> and save to reload." />
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FormattedMessage defaultMessage="Learn React" />
            </a>
            <Info />
          </header>
        </div>
      </IntlProvider>
    </AppProvider>
  );
}

export default App;
