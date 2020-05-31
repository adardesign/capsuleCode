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
  
  
  
  const RouteA = (state = {
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
  
  const RouteB = (state = { isLoading: false, data: null, }, action) => {
    return state;
  }
  
  const rootReducer = combineReducers({
    login,
    appState,
    RouteA,
    RouteB
  })
  
  export default rootReducer;