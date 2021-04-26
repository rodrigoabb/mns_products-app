import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';

import Header from '../header/header.component';
import MainContent from '../../pages/main-content/main-content.page';
import client from '../../common/apollo-client';

import '../../common/styles';
import './app.component.scss';

const App: React.FC = () => {
  return (
    <ApolloProvider client={ client  }>
      <Router>
        <Header />
        <MainContent />
      </Router>
    </ApolloProvider>
  );
}

export default App;
