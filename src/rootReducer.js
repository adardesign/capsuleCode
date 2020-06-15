import { combineReducers } from "redux";
import airports from "./containers/Airports/reducer";
import airplanes from "./containers/Airplanes/reducer";
import routes from "./containers/Routes/reducer";

const authToken = sessionStorage.getItem("token");
const login = (
  state = {
    isLoggedIn: authToken || false,
    authToken: authToken || null,
    roles: [],
    currentRole: "",
  },
  action
) => {
  if (action.type === "loginSuccess") {
    return { ...state, isLoggedIn: true, authToken: action.payload };
  }
  return state;
};
const appState = (state = { isLoading: false, isError: false }, action) => {
  return state;
};

const RouteA = (
  state = {
    isLoading: true,
    data: null,
    filters: [],
    search: null,
  },
  action
) => {
  return state;
};

const RouteB = (state = { isLoading: false, data: null }, action) => {
  return state;
};

const rootReducer = combineReducers({
  login,
  appState,
  RouteA,
  RouteB,
  airports,
  airplanes,
  routes,
});

export default rootReducer;
