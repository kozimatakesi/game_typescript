import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Header from './components/Header';
import ToDo from './components/ToDo/ToDo';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <div>
          <Header />
          <Route path="/about" component={About} />
          <Route path="/todo" component={ToDo} />
        </div>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
