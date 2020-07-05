import React from 'react';
import { Dashboard } from './pages/dashboard/dashboard';
import { Container } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <Container fixed>
        <Dashboard />
      </Container>
    </div>
  );
}

export default App;
