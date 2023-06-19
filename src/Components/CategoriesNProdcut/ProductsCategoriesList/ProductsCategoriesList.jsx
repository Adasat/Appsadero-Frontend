import { DataGrid } from '@mui/x-data-grid'
import React from 'react'

function ProductsCategoriesList({products}) {
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'name',
      headerName: 'Producto',
      width: 150,
      editable: false,
    },
    {
      field: 'price',
      headerName: 'Price',
      type: 'number',
      width: 90,
      editable: false,
    },
  ]

  const rows = products.map((product) => ({
    id: product.id,
    name: product.name,
    price: product.price,
  }));

  return (
    <DataGrid
      rows={rows}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 10,
          },
        },
      }}
      pageSizeOptions={[5]}
      checkboxSelection
      disableRowSelectionOnClick
    />
  )
}

export default ProductsCategoriesList
