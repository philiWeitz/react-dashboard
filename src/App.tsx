import React from 'react';
import { DashboardPage } from './page/dashboard-page/dashboard-page';
import { Container } from '@material-ui/core';
import { Provider } from './mobx/stores';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { routes } from './routes';
import { JobPage } from './page/job-page/job-page';

function App() {
  return (
    <BrowserRouter>
      <Provider>
        <div className="App">
          <Container fixed>
            <Switch>
              <Route path={routes.dashboard} component={DashboardPage} exact />
              <Route path={routes.job} component={JobPage} exact />
              <Redirect to={routes.dashboard} />
            </Switch>
          </Container>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
