import React from 'react'
import CardContentItem from '../common/CardContentItem'

function CountryDetailsContentItem({label,value}) {
  return (
    <CardContentItem variant="body2" label={`${label}:`} value={value}className="item-info"></CardContentItem>
  )
}

export default CountryDetailsContentItem
