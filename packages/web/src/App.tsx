import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@test-project/ui';

import Page from './features/layout/Page';
import Home from './features/pages/Home';
import Movie from './features/pages/Movie';

import { store } from './store';

const App: FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Router>
          <Page title='Movies'>
            <Switch>
              <Route path='/movie/:movieId'>
                <Movie />
              </Route>
              <Route path='/'>
                <Home />
              </Route>
            </Switch>
          </Page>
        </Router>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
