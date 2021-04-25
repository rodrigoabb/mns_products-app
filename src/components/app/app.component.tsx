import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';

import Header from '../header/header.component';
import Home from '../../pages/home/home.page';
import ProductDetails from '../../pages/productDetails/productDetails.page';
import client from '../../common/apollo-client';

import '../../common/styles';
import './app.component.scss';

const App: React.FC = () => {
  return (
    <ApolloProvider client={ client  }>
      <Router>
        <Header />
          <Switch>
            <Route path="/productDetails">
              <ProductDetails />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
