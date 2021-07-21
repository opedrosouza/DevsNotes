import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'

import { AddButton, Container, NotesList, NoNotes, NoNotesText, Text } from './style'
import NoteItem from '../../components/NoteItem'

// FontAwesome Components
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlus, faBook } from '@fortawesome/free-solid-svg-icons'

export default () => {
  const navigation = useNavigation()
  const list = useSelector(state => state.notes.list)

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Suas notas',
      headerRight: () => (
        <AddButton underlayColor="transparent" onPress={() => navigation.navigate('EditNote')}>
          <FontAwesomeIcon icon={ faPlus } color="#fff" size={20} />
        </AddButton>
      )
    })
  }, [])

  const handleNotePress = (index) => {
    navigation.navigate('EditNote', {
      key: index
    })
  }

  return (
    <Container>
      { list.length > 0 &&
        <NotesList 
          data={list}
          renderItem={({ item, index }) => (
            <NoteItem 
              data={item}
              index={index}
              onPress={handleNotePress}
            />
          )}
          keyExtrator={(item, index) => index.toString()}
        />
      }

      { list.length == 0 &&
        <NoNotes>
          <FontAwesomeIcon icon={ faBook } color="#fff" size={50} />
          <NoNotesText>Nenhuma nota adicionada</NoNotesText>
        </NoNotes>
      }
    </Container>
  )
}
