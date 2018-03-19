import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { ApolloLink } from 'apollo-client-preset'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import localSession from './vendor/localSession'

const httpLink = new HttpLink({ uri: 'http://localhost:4000/graphql' })

const middlewareAuthLink = new ApolloLink((operation, forward) => {
  const token = localSession.get()
  const authorizationHeader = token ? `${token}` : null
  operation.setContext({
    headers: {
      authorization: authorizationHeader
    }
  })
  return forward(operation)
})

const httpLinkWithAuthToken = middlewareAuthLink.concat(httpLink)

const client = new ApolloClient({
  link: httpLinkWithAuthToken,
  cache: new InMemoryCache()
})

ReactDOM.render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
, document.getElementById('root'));
registerServiceWorker();
