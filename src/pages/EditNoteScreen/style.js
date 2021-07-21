import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: #333;
`

export const Text = styled.Text``

export const TitleInput = styled.TextInput`
  font-size: 20px;
  font-weight: bold;
  padding: 15px;
  color: #fff;
`

export const BodyInput = styled.TextInput`
  flex: 1;
  padding: 15px;
  font-size: 15px;
  color: #fff;
`

export const SaveButton = styled.TouchableHighlight`
  margin-right: 15px;
`

export const CloseButton = styled.TouchableHighlight`
  margin-left: 15px;
`

export const RemoveButton = styled.TouchableHighlight`
  background-color: #ff3333;
  height: 40px;
  justify-content: center;
  align-items: center;
`

export const RemoveButtonText = styled.Text`
  font-size: 17px;
  color: #fff;
`