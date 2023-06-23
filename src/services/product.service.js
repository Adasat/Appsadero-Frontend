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

// get all products

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

// get all products from a category
export const getAllProductsByCategory = async () => {
  try {
    const { data } = await api.get('/preference/products', {
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

export const addProductsToMenu = async (cartId, shoppingList) => {
  try {
    await Promise.all(
      shoppingList.map(async (product) => {
        console.log(product)
        return await api.put(
          `/cart/${cartId}/product/${product.id}`,
          {},
          {
            headers: {
              token: localStorage.getItem('token'),
            },
          }
        )
      })
    )
    return true
  } catch (error) {
    console.log(error)
  }
}

// delete products in one shopping cart
export const deleteProductOfTheShoppingCart = async (cartId, productId) => {
  try {
    const { data } = await api.delete(
      `/${cartId}/product/${productId}`,
      { cartId, productId },
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
