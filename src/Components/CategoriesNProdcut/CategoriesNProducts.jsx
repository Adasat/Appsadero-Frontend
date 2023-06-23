import { Box, Card, Grid, Paper, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import {
  getAllProducts,
  getAllProductsByCategory,
  getAllcategories,
} from '../../services/product.service'
import CategoriesChip from './CategoriesChip/CategoriesChip'
import ProductsCategoriesList from './ProductsCategoriesList/ProductsCategoriesList'
import ShoppingCartList from '../ShoppingCartList/ShoppingCartList'

function CategoriesNProducts({ handleProducts, productos }) {
  //Relative to Categories of Products
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [productCart, setProductCart] = useState([])
  const [shoppingList, setShoopingList] = useState([])

  const handleClick = (categId) => {
    
    setSelectedCategory(categId)
    filterCategories(categId)
  }

  //Products by categories
  const [products, setProducts] = useState([])
  const [productCategory, setProductCategory] = useState([])

  const filterCategories = () => {
    const category = productCategory.find(
      (item) => item.id === selectedCategory
    )
    if (category) {
      return category.name
    } else {
      return ''
    }
  }

  //Handle for ProductsCategoriesList
  const handleProductSelection = (listCart) => {
    setProductCart(listCart)
    handleProducts(listCart)
    
  }

  const handleShoppingCart = (shoppingCart) => {
    setShoopingList(shoppingCart)
  }

  //Call to the product services
  const showCategoriesAndProducts = async () => {
    const res = await getAllcategories()
    const prod = await getAllProducts()
    const prodCat = await getAllProductsByCategory()
    setCategories(res)
    setProducts(prod)
    setProductCategory(prodCat)
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
          <Grid item xs={12} sm={4} md={3}>
            <Grid item>Categories</Grid>
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

          <Grid item xs={12} sm={8} md={5}>
            <ProductsCategoriesList
              products={products}
              selectedCategory={selectedCategory}
              handleProductSelection={handleProductSelection}
              productos={productos}
            />
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <ShoppingCartList
              productCart={productCart}
              products={products}
              handleShoppingCart={handleShoppingCart}
            />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  )
}

export default CategoriesNProducts