import { InputBase } from '@mui/material'
import React from 'react'

function InputWithIcon({children,placeHolder ,onChange,className,type}) {
  return (
    <>
       {children}
      <InputBase
        type={type}
        placeholder={placeHolder}
        fullWidth
        className={className}
        onChange={onChange}
      />
    </>
  )
}

export default InputWithIcon
