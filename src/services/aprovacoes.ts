import axios from 'axios'

export default {

  async getanos() {
    const result = await axios('http://localhost:5001/api/v1/approvals/')
    return result.data
  },

  async getano(id: string) {
    const result = await axios (`http://localhost:5001/api/v1/approvals/${id}`)
    return result.data
  },

  async getinstitute(id: string) {
    const result = await axios (`http://localhost:5001/api/v1/institutes/${id}`)
    return result.data
  },

  // async getestado(id: string) {
  //   const result = await axios (`http://localhost:5001/api/v1/approvals/${id}`)
  //   return result.data
  // },
}
