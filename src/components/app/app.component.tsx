import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import Header from '../header/header.component';
import Home from '../../pages/home/home.page';
import ProductDetails from '../../pages/productDetails/productDetails.page';

import '../../common/styles';
import './app.component.scss';

const App: React.FC = () => {
  return (
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
  );
}

export default App;
