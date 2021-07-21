const initialState = {
  list: [{
    title: 'Primeira Nota',
    body: 'Testando'
  }]
}

export default (state = initialState, action) => {

  switch (action) {
    case 'ADD_NOTE':
      
      break;
  
    default:
      break;
  }

  return state
}
