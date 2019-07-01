// ./react-redux-client/src/reducers/userReducer.js
const INITIAL_STATE = {
  user:[],
  isFetching: false,
  error: null,
  status:400,
  message:null,
}

export  const userReducer = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'USER_AUTHENTICATION_REQUEST':
          return {
            ...currentState,
            user:[],
            isFetching: true,
            error: null,
            status:0,
            message:null,
          }

    case 'USER_AUTHENTICATION_REQUEST_SUCCESS':
          return {
            ...currentState,
            user: action.user,
            isFetching: false,
            error: null,
            status:action.status,            
            message:action.message,
          }

    case 'USER_AUTHENTICATION_REQUEST_FAILD':
          return {
            ...currentState,
            user:[],
            isFetching: false,
            status:0,
            error: action.error,
            message:null,
          }

    case 'ADD_NEW_USER_REQUEST':    
          return {
            ...currentState,
            user:[],
            status:0,
            isFetching: true,
            error:null,
            message:null,
          }

    case 'ADD_NEW_USER_REQUEST_SUCCESS':
          return {
            ...currentState,
            user:action.user,
            status:action.status,
            isFetching: false,
            error:null,
            message:action.message,
          }
        
    case 'ADD_NEW_USER_REQUEST_FAILED':
          return {
            ...currentState,
            user:[],
            status:0,
            isFetching: false,
            error:action.error,
            message:null,
          }

    default:
       return currentState;

  }
}
