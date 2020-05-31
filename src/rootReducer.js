import {  combineReducers } from 'redux'

const login = (state = { isLoggedIn: false, roles: [], currentRole: '' }, action) => {
    if (action.type === 'loginSuccess') {
      return { ...state, isLoggedIn: true }
    }
    return state;
  }
  const appState = (state = { isLoading: false, isError: false }, action) => {
    return state;
  }
  
  
  
  const sessions = (state = {
      isLoading: true,
      data: null,
      filters: [],
      search: null,
    }, action) => {
      if(action.type === 'SESSION_GET_DATA_SUCCESS'){
        return {...state,  data: action.payload}
      }
    return state;
  }
  
  const procedureCodes = (state = { isLoading: false, data: null, }, action) => {
    return state;
  }
  
  const rootReducer = combineReducers({
    login,
    appState,
    sessions,
    procedureCodes
  })
  
  export default rootReducer;