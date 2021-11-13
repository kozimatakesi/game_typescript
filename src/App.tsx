import { ChakraProvider, Box } from '@chakra-ui/react';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Header from './components/Header';
import Home from './components/Home';
import Work from './components/Work';
import homePage from './images/tech-g19c066f07_1920.jpg';

const App: React.FC = () => {
  return (
    <ChakraProvider>
      <Box h="100%" bgImage={homePage}>
        <Header />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/work" component={Work} />
          </Switch>
        </BrowserRouter>
      </Box>
    </ChakraProvider>
  );
};

export default App;
