import { mergeResolvers } from "@graphql-tools/merge"

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => "Hello world!",
  },
}

export default mergeResolvers([resolvers])
