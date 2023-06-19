import { Box, Card, Grid, Paper, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { getAllProducts, getAllcategories } from '../../services/product.service'
import CategoriesChip from './CategoriesChip/CategoriesGrid'
import ProductsCategoriesList from './ProductsCategoriesList/ProductsCategoriesList'
import ShoppingCartList from '../ShoppingCartList/ShoppingCartList'

function CategoriesNProducts() {

  //Relative to Categories of Products
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(null)

 
  const handleClick = (categId) => {
    setSelectedCategory(categId)
  }

  const [products, setProducts] = useState([])

  






 const showCategoriesAndProducts = async () => {
    const res = await getAllcategories()
    const prod = await getAllProducts()
    setCategories(res)
    setProducts(prod)
  }

  useEffect(() => {
    showCategoriesAndProducts()
  }, [])

  return (
    <Box
      sx={{
        display: 'flex',
        margin: 'auto',
        width: '90vw',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10px',
        flexGrow: 1,
      }}
    >
      <Paper elevation={24}>
        <Typography variant="h6" textAlign={'center'}>
          Gestión de los productos
        </Typography>
        <Grid container padding={2} justifyContent={'space-around'}>
          <Grid xs={12} sm={4} md={3} direction={'row'}>
            
              <Grid item >
                Categories
              </Grid>
              {categories && categories.length > 0 ? (
                categories.map((el) => (
                  <CategoriesChip
                    key={el.id}
                    category={el}
                    onClick={handleClick}
                    filter={selectedCategory === el.id}
                  />
                ))
              ) : (
                <Card>Cargando</Card>
              )}
            
          </Grid>

          <Grid xs={12} sm={8} md={5}>
            <ProductsCategoriesList products={products}/>
              
            
          </Grid>
          <Grid xs={6} sm={4} md={3}>
            <ShoppingCartList/>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  )
}



export default CategoriesNProducts
