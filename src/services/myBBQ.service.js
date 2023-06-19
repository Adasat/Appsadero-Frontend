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

//service for back end to get all my asaderos created by me
export const getMyOwnBbq = async () => {
  try {
    const { data } = await api.get('/asadero/myOwnAsaderos', {
      headers: {
        token: localStorage.getItem('token'),
      },
    })
    return data
  } catch (error) {
    return error
  }
}

// //service for backend to get users from one asadero
// export const getUsersFromAsadero = async () => {
//   try {
//     const { data } = await api.get('/:asaderoId/users', {
//       headers: {
//         token: localStorage.getItem('token'),
//       },
//     })
//     return data
//   } catch (error) {
//     return error
//   }
// }

export const getOneAsadero = async (asaderoId) => {
  try {
    const { data } = await api.get(`/asadero/myAsaderos/${asaderoId}`, {
      headers: {
        token: localStorage.getItem('token'),
      },
    })
    return data
  } catch (error) {
    return error
  }
}

export const getUsersFromAsadero = async (asaderoId) => {
  try {
    const { data } = await api.get(`/asadero/${asaderoId}/users`, {
      headers: {
        token: localStorage.getItem('token'),
      },
    })
    return data
  } catch (error) {
    return error
  }
}