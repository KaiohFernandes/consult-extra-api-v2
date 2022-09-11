import * as jwt from "jsonwebtoken"
import { AuthenticationError } from "../../presentation/error/authenticationError"

async function validateToken({ req }) {
  const token = req.headers.authorization || null

  if (!token) {
    throw new AuthenticationError("Invalid Token")
  }

  jwt.verify(
    token.replace("Bearer ", ""),
    process.env.SECRET,
    (err, decode) => {
      if (err) {
        throw new AuthenticationError("Invalid Token")
      }

      if (decode.flow) {
        throw new AuthenticationError("Invalid Flow")
      }

      return {
        user: decode.id,
      }
    }
  )
}

export default validateToken
