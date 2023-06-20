import { List, ListItem, Typography } from '@mui/material'
import React from 'react'

function ShoppingCartList() {
    const productos = [
        {id: 1, name: 'pechuga'},
        {id: 2, name: 'chuletas'},
        {id: 3, name: 'pechuga'},
        {id: 4, name: 'berenjena'},
        {id: 5, name: 'cerveza'},
        {id: 6, name: 'muslos'},
        {id: 7, name: 'pepinos'},
        {id: 8, name: 'hielo'},
        {id: 9, name: 'carbon'},
        {id: 10, name: 'papas'},
        {id: 11, name: 'albaricoques'},
    ]

  return (
    <List>
        <Typography variant='h7'> Lista de productos</Typography>
        {productos.map((el) => <ListItem key={el.id}> {el.id} - {el.name}</ListItem>)}

    </List>
  )
}

export default ShoppingCartList