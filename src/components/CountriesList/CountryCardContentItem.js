import React from 'react'
import CardContentItem from '../common/CardContentItem'

function CountryCardContentItem({label,value}) {
  return (
     <CardContentItem variant="body2" label={`${label}:`} value={value}></CardContentItem>
  )
}

export default CountryCardContentItem
