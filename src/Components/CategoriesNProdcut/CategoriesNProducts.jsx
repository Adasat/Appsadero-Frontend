import { Grid } from '@mui/material'
import React from 'react'

function CategoriesNProducts() {
  return (
    <Grid container xs={12} sm={12} md={12}>
      Gestión de los productos
      <Grid item>Categories</Grid>
      <Grid item>Products</Grid>
      <Grid item>Lista de la compra</Grid>
    </Grid>
  )
}

export default CategoriesNProducts