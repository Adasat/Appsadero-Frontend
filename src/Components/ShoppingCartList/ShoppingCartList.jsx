import { List, ListItem, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

function ShoppingCartList({productCart, products}) {

    const [shoppingCart, setShoppingCart] = useState([])

    function findCommonElements(products, productCart) {
      const finder = products.map((product) => {
        if (productCart.includes(product.id)) {
          setShoppingCart([...shoppingCart, product])

        }
      })

      return finder.filter((element) => element !== undefined)
    }

   

   
    

  return (
    <List>
      <Typography variant="h7"> Lista de productos</Typography>
      {shoppingCart.map((el) => (
        <ListItem key={el.id}>
          {' '}
          {el.id} - {el.name}
        </ListItem>
      ))}
    </List>
  )
}

export default ShoppingCartList