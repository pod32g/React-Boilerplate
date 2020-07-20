import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import MainRouter from './Routes/MainRouter';

function App() {

  return (
    <BrowserRouter>
      {
        MainRouter.map((route) => {
          return (
            <Route path={route.path} component={route.component} />
          )
        })
      }
    </BrowserRouter>
  );
}

export default App;
