import React, { FC, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@test-project/ui';

import Page from './features/layout/Page';

import { store } from './store';

const Home = lazy(() => import('./features/pages/Home'));
const Movie = lazy(() => import('./features/pages/Movie'));

const App: FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Router>
          <Page title='Movies'>
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                <Route path='/movie/:movieId'>
                  <Movie />
                </Route>
                <Route path='/'>
                  <Home />
                </Route>
              </Switch>
            </Suspense>
          </Page>
        </Router>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
