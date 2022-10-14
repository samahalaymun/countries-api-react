import { Box } from '@mui/material'
import React from 'react'

function AsideSectionMainContent({className,children}) {
  return (
    <Box className={className}>
        {children}
    </Box>
  )
}

export default AsideSectionMainContent
