import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

function MainSection({className ,spacing,children,columns}) {
  return (
    <Box className={className}>
       <Grid container columns={columns} spacing={spacing}>
          {children}
       </Grid>
    </Box>
  )
}

export default MainSection
