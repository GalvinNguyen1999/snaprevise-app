import jwt from 'jsonwebtoken'
import { env } from '~/config/environment'
import { StatusCodes } from 'http-status-codes'

export const authenticate = (req, res, next) => {
  const token = req.header('Authorization')

  if (!token) {
    return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Unauthorized' })
  }

  try {
    const decoded = jwt.verify(token, env.JWT_SECRET)

    req.user = decoded

    next()
  } catch (error) {
    return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Unauthorized' })
  }
}

export const isAdmin = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    next()
  } else {
    return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Unauthorized' })
  }
}
