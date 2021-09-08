import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { homepage } from '../package.json';
import Container from './Container';
import Footer from './Footer';
import Input from './Input';
import List from './List';
import ToggleAll from './ToggleAll';

function App({ Router = BrowserRouter }) {
  return (
    <Router basename={process.env.NODE_ENV === 'test' ? undefined : homepage}>
      <Suspense fallback="loading...">
        <Container>
          <section className="todoapp">
            <header>
              <h1>todos</h1>
            </header>
            <Input />
            <section className="main">
              <ToggleAll />
              <List />
              <Footer />
            </section>
          </section>
        </Container>
      </Suspense>
    </Router>
  );
}

export default App;
