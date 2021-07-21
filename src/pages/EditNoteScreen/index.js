import React, { useState, useEffect, useLayoutEffect } from 'react'
import { Container, TitleInput, BodyInput, SaveButton, CloseButton, RemoveButton, RemoveButtonText } from './style'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigation, useRoute } from '@react-navigation/native'

// FontAwesome Components
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'

export default () => {
  const [title, setTitle]   = useState('')
  const [body, setBody]     = useState('')
  const [status, setStatus] = useState('new')

  const navigation = useNavigation()
  const route = useRoute()
  const dispatch = useDispatch()
  const list = useSelector(state => state.notes.list)

  useEffect(() => {
    if (route.params?.key != undefined && list[route.params.key]) {
      const item = list[route.params.key]
      setStatus('edit')
      setTitle(item.title)
      setBody(item.body)
    }
  }, [])

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: status == 'new' ? 'Nova nota' : 'Editar nota',
      headerRight: () => (
        <SaveButton underlayColor="transparent" onPress={handleSaveButton}>
          <FontAwesomeIcon icon={ faCheck } color="#fff" size={20} />
        </SaveButton>
      ),
      headerLeft: () => (
        <CloseButton underlayColor="transparent" onPress={handleCloseButton}>
          <FontAwesomeIcon icon={ faTimes } color="#fff" size={20} />
        </CloseButton>
      )
    })
  }, [status, title, body])

  const handleSaveButton = () => {
    if (title.trim() != '' && body.trim() != '') {
      if (status == 'edit') {
        dispatch({
          type: 'EDIT_NOTE',
          payload: {
            key: route.params.key,
            title, body
          }
        })
      } else {
        dispatch({
          type: 'ADD_NOTE',
          payload: {title, body}
        })
      }

      navigation.goBack()

    } else {
      alert('Preecha as informações')
    }
  }

  const handleCloseButton = () => {
    navigation.goBack()
  }

  const handleRemoveButton = () => {
    dispatch({
      type: 'DEL_NOTE',
      payload: {
        key: route.params.key
      }
    })
    navigation.goBack()
  }

  return (
    <Container>
      <TitleInput 
        placeholder="Título da nota"
        placeholderTextColor="#ccc"
        value={title}
        onChangeText={ t => setTitle(t)}
        autoFocus={true}
      />
      <BodyInput 
        placeholder="Corpo da nota"
        placeholderTextColor="#ccc"
        value={body}
        multiline={true}
        textAlignVertical="top"
        onChangeText={ t => setBody(t)}
      />

      { status == 'edit' && 
        <RemoveButton underlayColor="#ff0000" onPress={handleRemoveButton}>
          <RemoveButtonText>Excluir nota</RemoveButtonText>
        </RemoveButton>
      }
    </Container>
  )
}
