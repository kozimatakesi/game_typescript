import { ChakraProvider, Box } from '@chakra-ui/react';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Header from './components/Header';
import Home from './components/Home';
import ToDo from './components/ToDo/ToDo';
import Hooter from './components/Hooter';

const App: React.FC = () => {
  return (
    <ChakraProvider>
      <Box h="100vh">
        <Header />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/todo" component={ToDo} />
          </Switch>
        </BrowserRouter>
        <Hooter />
      </Box>
    </ChakraProvider>
  );
};

export default App;
