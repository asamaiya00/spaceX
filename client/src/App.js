import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import logo from './logo.png';
import Launches from './components/Launches';
import Launch from './components/Launch';
const client = new ApolloClient({
  uri: '/graphql',
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <div className="container">
          <img
            src={logo}
            alt="SpaceX"
            style={{ width: 500, margin: 'auto', display: 'flex' }}
          />
          <Route exact path="/" component={Launches} />
          <Route exact path="/launch/:flight_number" component={Launch} />
        </div>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
