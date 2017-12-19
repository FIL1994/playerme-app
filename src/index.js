/**
 * @author Philip Van Raalte
 * @date 2017-12-19
 *
 * https://playermev2.docs.apiary.io/#reference/graphql/get-the-current-user
 * https://player.me/api/graphiql
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {ApolloClient} from 'apollo-client';
import {createHttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {ApolloProvider} from 'react-apollo';

import App from './components/App';

const client = new ApolloClient({
  link: new createHttpLink({uri: 'https://player.me/api/graphql'}),
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App/>
  </ApolloProvider>,
  document.getElementById('root')
);