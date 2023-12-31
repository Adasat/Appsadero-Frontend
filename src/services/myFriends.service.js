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

//service for show allUsers
export const getAllUsers = async () => {
  try {
    const { data } = await api.get('/profile/', {
      headers: {
        token: localStorage.getItem('token'),
      },
    })
    return data
  } catch (error) {
    return error
  }
}

//service for add friend by nickname
export const addFriendByNickname = async (nickname) => {
  try {
    const { data } = await api.put(
      '/friend/add',
      { nickname },
      {
        headers: {
          token: localStorage.getItem('token'),
        },
      }
    )
    return data
  } catch (error) {
    return error
  }
}

//service for get one profile' user
export const getOneByNickname = async (nick) => {
  try {
    const { data } = await api.get(`/profile/${nick}`, {
      headers: {
        token: localStorage.getItem('token'),
      },
    })
    return data
  } catch (error) {
    return error
  }
}
