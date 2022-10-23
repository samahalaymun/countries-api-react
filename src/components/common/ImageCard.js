import { Box } from '@mui/material'
import React from 'react'

function ImageCard({flag,alt,className}) {
  return (
    <Box
        component="img"
        className={className}
        alt={alt}
        src={flag}
      />
  )
}

export default ImageCard
