import { Box } from '@mui/system';
import React from 'react'

function ErrorMessage( {error} ) {
  return <Box className="error">{error}</Box>;
}

export default ErrorMessage
