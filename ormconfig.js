/* eslint-disable no-undef */

const host = process.env.DATABASE_HOST
const port = process.env.DATABASE_PORT
const username = process.env.DATABASE_USERNAME
const password = process.env.DATABASE_PASSWORD
const database = process.env.DATABASE_NAME

const ormConfig = {
  type: "postgres",
  host,
  port,
  username,
  password,
  database,
  synchronize: true,
  logging: false,
  entities: ["src/domain/models/**/*.ts"],
}

if (process.env.NODE_ENV === "prd") {
  ormConfig.ssl = { rejectUnauthorized: false }
  ormConfig.entities = ["dist/domain/models/**/*.js"]
}

module.exports = ormConfig
