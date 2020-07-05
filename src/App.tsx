import React from 'react';
import { Dashboard } from './pages/dashboard/dashboard';
import { Container } from '@material-ui/core';
import { Provider } from './mobx/store';

function App() {
  return (
    <Provider>
      <div className="App">
        <Container fixed>
          <Dashboard />
        </Container>
      </div>
    </Provider>
  );
}

export default App;
