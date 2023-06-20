import { List, ListItem, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

function ShoppingCartList({ productCart, products, handleShoppingCart }) {
  const [shoppingCart, setShoppingCart] = useState([])

  function findCommonElements(products, productCart) {
    const commonProducts = products.filter((product) =>
      productCart.includes(product.id)
    )
    return commonProducts
  }

  useEffect(() => {
    const commonElements = findCommonElements(products, productCart)
    setShoppingCart(commonElements)
  }, [products, productCart])

  useEffect(() => {
    handleShoppingCart(shoppingCart)
  }, [shoppingCart, handleShoppingCart])

  return (
    <List>
      <Typography variant="h7"> Lista de productos</Typography>
      {shoppingCart.map((el) => (
        <ListItem key={el.id}>- {el.name}</ListItem>
      ))}
    </List>
  )
}

export default ShoppingCartList
