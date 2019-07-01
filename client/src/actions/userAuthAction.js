import { withBasename } from "../utils/params";

// const apiUrl = withBasename('/api/');
// import {apiUrl}  from '../utils/apiUrl';
// import * as apiUrl from '../utils/apiUrl';
const apiUrl = 'http://localhost:3000/api/';




export const login = (user) => {
  console.log(user)
  return (dispatch) => {
    dispatch(userAuthRequest(user));
    return fetch(apiUrl+"login", {
      method:'post',
      body: user,
      // credentials: 'same-origin'
    }).then(response => {

      if(response.ok){
        response.json().then(data => {
          dispatch(userAuthRequestSuccess(data.user, data.message, data.status))
          dispatch(currentUser(data.user))

        })
      }
      else{
        response.json().then(error => {
          dispatch(userAuthRequestFaild(error))
        })
      }
    })
  }
}

export const userAuthRequest = (user) => {
  return {
    type: 'USER_AUTHENTICATION_REQUEST',
    user
  }
}

export const userAuthRequestSuccess = (user,message,status) => {
  return {
    type:'USER_AUTHENTICATION_REQUEST_SUCCESS',
    user:user,
    message:message,
    status:status
  }
}

export const userAuthRequestFaild = (error) => {
  return {
    type: 'USER_AUTHENTICATION_REQUEST_FAILD',
    error
  }
}


export const register = (user) => {
  return (dispatch) => {
    dispatch(addNewUserRequest(user));
    return fetch(apiUrl+"register", {
      method:'post',
      body: user,
      credentials: 'same-origin'
    }).then(response => {
      if(response.ok){
        response.json().then(data => {
          dispatch(addNewUserRequestSuccess(data.user, data.message, data.status))
        })
      }
      else{
        debugger;
        response.json().then(error => {
          dispatch(addNewUserRequestFailed(error))
        })
      }
    })
  }
}

export const addNewUserRequest = (user) => {
  return {
    type: 'ADD_NEW_USER_REQUEST',
    user
  }
}

export const addNewUserRequestSuccess = (user,message,status) => {
  return {
    type: 'ADD_NEW_USER_REQUEST_SUCCESS',
    user:user,
    message:message,
    status:status
  }
}

export const addNewUserRequestFailed = (error) => {
  return {
    type: 'ADD_NEW_USER_REQUEST_FAILED',
    error
  }
}
export const currentUser = (user) => {
  return {
    type: 'CURRENT_USER',
    user
  }
}


