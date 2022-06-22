import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oyzeua1gp601z4hq4khi77/master',
  cache: new InMemoryCache()
})
