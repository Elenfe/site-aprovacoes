import axios from 'axios'

export default {

  // listar:() => {
  //   return http.get('5c1bcea01981cf370444a19f')
  // },

  async getanos() {
    const result = await axios('http://localhost:5001/api/v1/approvals/')
    return result.data
  },

  async getano(id: string) {
    const result = await axios (`http://localhost:5001/api/v1/approvals/${id}`)
    return result.data
  },

  // async getestado(id: string) {
  //   const result = await axios (`http://localhost:5001/api/v1/approvals/${id}`)
  //   return result.data
  // },
}
