import { api } from './api'

export const createBBQ = async (bbq) => {
  try {
    const { data } = await api.post('/asadero/', {
    "name": bbq.name,
    "description": bbq.description,
    "date_time": bbq.date_time,
    "duration": bbq.duration,
    "confirmation_date": bbq.payments_accepted,
    "place": bbq.place,
    }, {
      headers: {
        token: localStorage.getItem('token')
      }
    })
    console.log(data)
    return data
  } catch (err) {
    throw new Error(err)
  }
}

export const addGuests = async (id, guestList) => {
  try {
    await Promise.all(
      guestList.map(async (user) => {
          return await api.post(`/asadero/${id}/user/${user}`, {}, {
            headers: {
              token: localStorage.getItem('token'),
            },
          }
        )
      })
    )
  } catch (error) {
    console.log(error)
  }
}

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

export const getSharedAsaderos = async (userId2) => {
  try {
    const { data } = await api.get(`/asadero/sharedAsaderos/${userId2}`, {
      headers: {
        token: localStorage.getItem('token'),
      },
    })
    return data
  } catch (error) {
    return error
  }
}

//service for close asadero
export const rejectUsersFromAsadero = async (asaderoId) => {
  try {
    const { data } = await api.put(`/asadero/${asaderoId}/close`, {},
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

//service for updating anything on asadero
export const updateAsadero = async (asaderoId, fields) => {
    try {
    const { data } = await api.patch(`/asadero/${asaderoId}`, { isOpen: fields },
      {
        headers: {
          token: localStorage.getItem('token'),
        },
      }
    )
    console.log(data)
    return data
  } catch (error) {
    return error
  }
}

//Get cart from an bbq
export const getCartFromAsadero = async (cartId) => {
  try {
    const { data } = await api.get(`/cart/${cartId}/products`, {
      headers: {
        token: localStorage.getItem('token'),
      },
    })
    return data
  } catch (error) {
    return error
  }
}


/// put('/:asaderoId/close/

export const aceptInvitationFromAsadero = async (asaderoId) => {
  try {
    const { data } = await api.put(
      `/profile/asadero/${asaderoId}/pay`,
      {},
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

