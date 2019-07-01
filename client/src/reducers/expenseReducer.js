// ./react-redux-client/src/reducers/expensesReducer.js
const INITIAL_STATE = {
    expenses:[],
    isFetching: false,
    error: null,
    status:400,
    message:null,
  }
  
  export  const expenseReducer = (currentState = INITIAL_STATE, action) => {
    switch (action.type) {
      case 'EXPENSE_GET_REQUEST':
            return {
              ...currentState,
              expenses:[],
              isFetching: true,
              error: null,
              status:0,
              message:null,
            }
  
      case 'EXPENSE_GET_REQUEST_SUCCESS':
            return {
              ...currentState,
              expenses: action.expenses,
              isFetching: false,
              error: null,
              status:action.status,            
              message:action.message,
            }
  
      case 'EXPENSE_GET_REQUEST_FAILD':
            return {
              ...currentState,
              expenses:[],
              isFetching: false,
              status:0,
              error: action.error,
              message:null,
            }
  
      default:
         return currentState;
  
    }
  }
  
