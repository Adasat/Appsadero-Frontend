import { Box } from '@mui/system'
import React from 'react'

function DataGrid() {

    const columns = [
  {
    field: 'first_name',
    headerName: 'Nombre',
    width: 150,
    editable: false,
  },
  {
    field: 'nickname',
    headerName: 'Nickname',
    width: 150,
    editable: false,
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 200,
    editable: false,
  },

]
  return (
    <Box>DataGrid</Box>
  )
}

export default DataGrid