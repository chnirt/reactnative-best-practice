import {ApolloClient} from 'apollo-client';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {createHttpLink} from 'apollo-link-http';

const client = new ApolloClient({
  link: createHttpLink({uri: 'http://devcloud3.digihcs.com:14047/graphqlhrm'}),
  cache: new InMemoryCache(),
  // link: ApolloLink.from([errorLink, authLink, terminalLink]),
});

export default client;
