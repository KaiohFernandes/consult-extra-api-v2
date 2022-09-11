import { setupApp } from "./config/setupApp"
import { envConfig } from "./config/env"
import { setupApolloServer } from "./graphql/apollo"
import { createConnection } from "typeorm"

const server = async () => {
  envConfig()

  const app = await setupApp()
  await setupApolloServer(app)

  app.listen(process.env.PORT, () => {
    console.log(`Server on - Port: ${process.env.PORT}`)
  })
}

createConnection().then(() => {
  server()
})
