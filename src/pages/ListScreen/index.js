import React from 'react'
import { Container, Text, Button } from './style'
import { useNavigation } from '@react-navigation/core'

export default () => {
  const navigation = useNavigation()

  return (
    <Container>
      <Text>Tela de Listar</Text>
      <Button title="Ir para Editar" onPress={() => navigation.navigate('EditNote')} />
    </Container>
  )
}
