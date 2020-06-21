import {
  READ_ROUTES,
  READ_ROUTES_SUCCESS,
  READ_ROUTES_FAIL,
  CREATE_ROUTE_SUCCESS,
  UPDATE_ROUTE_SUCCESS,
  DELETE_ROUTE_SUCCESS,
} from "./constants";

const ROUTES = (
  state = { isLoading: true, data: null, error: null },
  action
) => {

  if (action.type === READ_ROUTES) {
    return { ...state, isLoading: true };
  }
  if (action.type === READ_ROUTES_SUCCESS) {
    return { ...state, isLoading: false, error: null, data: action.payload };
  }
  if (action.type === READ_ROUTES_FAIL) {
    return { ...state, isLoading: false, error: action.payload };
  }
  if (action.type === CREATE_ROUTE_SUCCESS) {
    const data = [...state.data, action.payload]
    return { ...state, isLoading: false, data };
  }



  return state;
};

export default ROUTES;
