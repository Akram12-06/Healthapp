import React, { useEffect } from 'react'
import { Text } from 'react-native'
import { styles } from '../../styles/style'

function Heading({label, size, color='black', padding='p-2', style}) {
  return (
    <Text style={styles[`${color}Text`]} className={`font-semibold ${size} ${padding} ${style}`}>{label}</Text>
  )
}

export default Heading
