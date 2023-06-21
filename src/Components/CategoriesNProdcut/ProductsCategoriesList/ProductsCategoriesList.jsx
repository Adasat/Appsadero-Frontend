import { DataGrid } from '@mui/x-data-grid'
import { useEffect, useState } from 'react'

function ProductsCategoriesList({
  products,
  selectedCategory,
  handleProductSelection,
}) {
  const [selectedRows, setSelectedRows] = useState([])
  const [listCart, setListCart] = useState([])

  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 90,
    },
    {
      field: 'name',
      headerName: 'Producto',
      width: 150,
      editable: false,
    },
    {
      field: 'price',
      headerName: 'Precio',
      type: 'number',
      width: 90,
      editable: false,
    },
    {
      field: 'unit',
      headerName: 'unidad',
      width: 30,
      editable: false,
    },
  ]

  const filterProducts = products.filter(
    (product) =>
      product.preferenceId === selectedCategory && {
        id: product.id,
        name: product.name,
        price: product.price,
        unit: product.unit,
      }
  )

  const allProducts = products.map((product) => ({
    id: product.id,
    name: product.name,
    price: product.price,
    unit: product.unit,
  }))

  const rows = filterProducts.length > 0 ? filterProducts : allProducts

  const handleSelectionModelChange = (e) => {
  setListCart((prevListCart) => [...prevListCart, e.row]);
};

useEffect(() => {
  handleProductSelection(listCart);
}, [listCart, handleProductSelection]);

  

  const rowsWithSelection = rows.map((row) => {
    if (selectedRows.includes(row.id)) {
      return { ...row, checkboxSelection: true, disabled: true }
    } else {
      return { ...row, checkboxSelection: true }
    }
  })

  return (
    <DataGrid
      className="productsList"
      rows={rowsWithSelection}
      columns={columns}
      onCellClick={handleSelectionModelChange}
      selectionModel={selectedRows}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 10,
          },
        },
      }}
      pageSizeOptions={[5]}
      checkboxSelection={true}
    />
  )
}

export default ProductsCategoriesList
