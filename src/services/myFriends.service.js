import { api } from './api'

//service for back end to get all my friends
export const getAllFriends = async () => {
  try {
    const { data } = await api.get('/friend/', {
      headers: {
        token: localStorage.getItem('token'),
      },
    })
    return data
  } catch (error) {
    return error
  }
}
