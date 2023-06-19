import { useState } from 'react'
import { api } from './api'

export const createBBQ = async (bbq, guestList) => {

  var id
  
  try {
    console.log(bbq)
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
    data && console.log(data)
    id = data.id
  } catch (err) {
    console.log(err)
    throw new Error(err)
  }

await addGuests(id, guestList[1])
}

const addGuests = async (id, guestList) => {
  
  try {
    
    
    console.log(guestList)
    console.log(id)
    await Promise.all(
      guestList.map(async (user) => {
          //const { id }= lg
          console.log(user)
          return await api.put(`/asadero/${id}/user/${user}`, {
            headers: {
              token: localStorage.getItem('token')
            }
          })
        })
        )
        
      } catch (error) {
        console.log(error)
      }
}

/* 
headers: {
  token: localStorage.getItem('token')
},
 */
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
