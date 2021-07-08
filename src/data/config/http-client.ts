import Axios from 'axios'
import { BASE_URL } from './constants'

export const httpClient = Axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
})