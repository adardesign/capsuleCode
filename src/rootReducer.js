import { combineReducers } from 'redux'
import airports from './containers/Airports/reducer'

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
  return state;
}

const RouteB = (state = { isLoading: false, data: null, }, action) => {
  return state;
}



const rootReducer = combineReducers({
  login,
  appState,
  RouteA,
  RouteB,
  airports
});

export default rootReducer;