import { api } from './api'

//service for back end to get all my asaderos
export const getAllMyAsaderos = async () => {
  try {
    const { data } = await api.get('/asadero/myAsaderos', {
      headers: {
        token: localStorage.getItem('token'),
      },
    })
    return data
  } catch (error) {
    return error
  }
}
