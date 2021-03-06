import React from 'react'
import { ItemBox, ItemTitle } from './style'

export default ({ data, index, onPress }) => {
  return (
    <ItemBox key={index} onPress={() => onPress(index)}>
      <ItemTitle>{ data.title }</ItemTitle>
    </ItemBox>
  )
}
