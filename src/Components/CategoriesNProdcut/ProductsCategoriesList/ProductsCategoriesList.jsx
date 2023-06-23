import { DataGrid } from '@mui/x-data-grid'
import { useEffect, useState } from 'react'

function ProductsCategoriesList({
  products,
  selectedCategory,
  handleProductSelection,
  productos
}) {
  const [selectedRows, setSelectedRows] = useState([]);
  const [listCart, setListCart] = useState([]);

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
  ];

  const filterProducts = products.filter(
    (product) =>
      product.preferenceId === selectedCategory && {
        id: product.id,
        name: product.name,
        price: product.price,
        unit: product.unit,
      }
  );

  const allProducts = products.map((product) => ({
    id: product.id,
    name: product.name,
    price: product.price,
    unit: product.unit,
  }));

  const rows = filterProducts.length > 0 ? filterProducts : allProducts;

  const handleSelectionModelChange = (e) => {
    const selectedProductId = e.row.id;
    const isSelected = selectedRows.includes(selectedProductId);

    if (isSelected) {
      // Si el producto ya estaba seleccionado, lo deseleccionamos y eliminamos del carrito
      setSelectedRows((prevSelectedRows) =>
        prevSelectedRows.filter((rowId) => rowId !== selectedProductId)
      );

      setListCart((prevListCart) =>
        prevListCart.filter((product) => product.id !== selectedProductId)
      );
    } else {
      // Si el producto no estaba seleccionado, lo agregamos al carrito
      setSelectedRows((prevSelectedRows) => [...prevSelectedRows, selectedProductId]);
      setListCart((prevListCart) => [...prevListCart, e.row]);
    }
  };

  useEffect(() => {
    if (selectedRows.length === 0) {
      // Si no hay elementos seleccionados, vaciamos el carrito
      setListCart([]);
      
    } else {
      // Si hay elementos seleccionados, actualizamos el carrito
      const updatedCart = rows.filter((row) => selectedRows.includes(row.id));
      setListCart(updatedCart);
    }
  }, [selectedRows]);

  useEffect(() => {
    // Verificar los elementos seleccionados proporcionados por props
    if (productos) {
      const selectedRowIds = productos.map((product) => product.id);
      setSelectedRows(selectedRowIds);
    }
  }, [productos]);

  useEffect(() => {
    handleProductSelection(listCart);
  }, [listCart]);

  const rowsWithSelection = rows.map((row) => {
    const productInLocalStorage = listCart.find((product) => product.id === row.id);

    if (productInLocalStorage) {
      return { ...row, checkboxSelection: true };
    } else {
      return { ...row, checkboxSelection: false };
    }
  });

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
  );
}

export default ProductsCategoriesList;
