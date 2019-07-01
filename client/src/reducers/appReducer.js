// ./react-redux-client/src/reducers/appReducer.js
const INITIAL_STATE = {
  user: []
}

const appReducer = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'CURRENT_USER':
          return {
            ...currentState,
            user: action.user
          }


    default:
       return currentState;

  }
}

export default appReducer;
