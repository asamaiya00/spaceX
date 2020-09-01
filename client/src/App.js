import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import './App.css';
import logo from './logo.png';
import Launches from './components/Launches';

const client = new ApolloClient({
  uri: 'https://localhost:5000/graphql',
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="container">
        <img
          src={logo}
          alt="SpaceX"
          style={{ width: 500, margin: 'auto', display: 'flex' }}
        />
        <Launches />
      </div>
    </ApolloProvider>
  );
}

export default App;
