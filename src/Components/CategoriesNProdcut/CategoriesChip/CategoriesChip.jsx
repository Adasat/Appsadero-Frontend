import { Chip } from '@mui/material'
import React, { useState } from 'react'

function CategoriesChip({category, onClick, filter}) {
  const [selected, setSelected] = useState(filter)

  const handleClick = () => {
    setSelected(!selected)
    onClick(category.id)
    
  }

  return (
    <Chip label={category.name} variant={selected ?  'contained' : 'outlined'} color='secondary' onClick={handleClick}/>
  )
}

export default CategoriesChip