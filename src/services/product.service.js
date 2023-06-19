import { api } from './api'

// get all categories of products

export const getAllcategories = async () => {
  try {
    const { data } = await api.get('/preference/', {
      
      headers: {
        token: localStorage.getItem('token'),
      },
      
    })
    return data
  } catch (error) {
    return error
  }
}

// get all products of the one category

export const getAllProducts = async () => {
  try {
    const { data } = await api.get('/product/', {
      
      headers: {
        token: localStorage.getItem('token'),
      },
      
    })
    return data
  } catch (error) {
    return error
  }
}


// put product in one shopping cart
export const addProductInTheShoppingCart = async (cartId, productId) => {
  try {
    const { data } = await api.put(`/${cartId}/product/${productId}`, { cartId, productId }, {
      headers: {
        token: localStorage.getItem('token')
      },
    })
    return data
  } catch (error) {
    return error
  }
}

// delete products in one shopping cart
export const deleteProductOfTheShoppingCart = async (cartId, productId) => {
  try {
    const { data } = await api.delete(`/${cartId}/product/${productId}`, { cartId, productId }, {
      headers: {
        token: localStorage.getItem('token')
      },
    })
    return data
  } catch (error) {
    return error
  }
}