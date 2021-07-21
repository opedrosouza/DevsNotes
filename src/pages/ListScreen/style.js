import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #333;
  justify-content: center;
  align-items: center;
`
export const Text = styled.Text`
  color: #fff;
`
export const AddButton = styled.TouchableHighlight`
  margin-right: 15px;
`

export const NotesList = styled.FlatList`
  flex: 1;
  width: 100%;
`

export const NoNotes = styled.View`
  justify-content: center;
  align-items: center;
`

export const NoNotesText = styled.Text`
  font-size: 20px;
  color: #fff;
  margin-top: 20px;
`