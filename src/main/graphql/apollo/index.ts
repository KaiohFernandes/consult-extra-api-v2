import { Express } from "express"
import { ApolloServer } from "apollo-server-express"
import { GraphQLError } from "graphql"
import typeDefs from "../typeDefs"
import resolvers from "../resolvers"
import validateToken from "../../middleware/auth"

const handleErrors = (response: any, errors: readonly GraphQLError[]): void => {
  errors?.forEach(error => {
    response.data = undefined
    if (checkError(error, "UserInputError")) {
      response.http.status = 400
    } else if (checkError(error, "AuthenticationError")) {
      response.http.status = 401
    } else if (checkError(error, "ForbiddenError")) {
      response.http.status = 403
    } else {
      response.http.status = 500
    }
  })
}

const checkError = (error: GraphQLError, errorName: string): boolean => {
  return [error.name, error.originalError?.name].some(
    name => name === errorName
  )
}

/**
 * Create a Apollo GraphQL Server
 *
 * @param app Express instance
 */
export const setupApolloServer = async (app: Express) => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    context: validateToken,
    plugins: [
      {
        requestDidStart: async () => ({
          willSendResponse: async ({ response, errors }) =>
            handleErrors(response, errors),
        }),
      },
    ],
  })

  await server.start()

  server.applyMiddleware({ app })
}
