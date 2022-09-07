import { mergeTypeDefs } from "@graphql-tools/merge"
import { gql } from "apollo-server-express"

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
  }
`

export default mergeTypeDefs([typeDefs])
