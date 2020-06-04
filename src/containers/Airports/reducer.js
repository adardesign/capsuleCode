import {
  LOAD_AIRPORTS,
  LOAD_AIRPORTS_SUCCESS,
  LOAD_AIRPORTS_FAIL,
} from "./constants";

const airports = (
  state = { isLoading: true, page:0,  data: null, error: null },
  action
) => {
  if (action.type === LOAD_AIRPORTS) {
    return { ...state, isLoading: true, page:action.payload };
  }
  if (action.type === LOAD_AIRPORTS_SUCCESS) {
    return { ...state, isLoading: false, error: null, data: action.payload };
  }
  if (action.type === LOAD_AIRPORTS_FAIL) {
    return { ...state, isLoading: false, error: action.payload };
  }

  return state;
};

export default airports;
