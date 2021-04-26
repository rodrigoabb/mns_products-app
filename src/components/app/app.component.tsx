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
import ProductDetails from '../../pages/product-details/product-details.page';
import client from '../../common/apollo-client';

import '../../common/styles';
import './app.component.scss';

const App: React.FC = () => {
  return (
    <ApolloProvider client={ client  }>
      <Router>
        <Header />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/product/:productId" exact>
              <ProductDetails />
            </Route>
          </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
