import axios from 'axios'

export const http = axios.create({
  baseURL: 'http://localhost:5001/api/v1/approvals/'
})
