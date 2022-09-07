import dotenv from "dotenv"

export const envConfig = () => {
  dotenv.config({
    path: process.env.NODE_ENV === "prd" ? ".env.production" : ".env.local",
  })
}
