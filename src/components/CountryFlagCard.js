import { Box } from '@mui/material'
import React from 'react'

function CountryFlagCard() {
  return (
    <Box
        component="img"
        sx={{
          maxHeight:"405px",
          height: "100%",
          width: "100%",
          objectFit:"cover"
        }}
        alt=""
        src="https://flagcdn.com/be.svg"
      />
  )
}

export default CountryFlagCard
