import axios from 'axios'
import { env } from '~/config/environment'

export const instance = axios.create({
  baseURL: env.OPENCAGE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  },
  params: {
    key: env.OPENCAGE_KEY
  }
})
