import { ChakraProvider, Box } from '@chakra-ui/react';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Header from './components/Header';
import Home from './components/Home';
import Skill from './components/Skill';
import Hooter from './components/Hooter';
import homePage from './components/tech-g19c066f07_1920.jpg';

const App: React.FC = () => {
  return (
    <ChakraProvider>
      <Box h="100%" bgImage={homePage}>
        <Header />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/skill" component={Skill} />
          </Switch>
        </BrowserRouter>
        <Hooter />
      </Box>
    </ChakraProvider>
  );
};

export default App;
