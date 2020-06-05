import {
  LOAD_AIRPLANES,
  LOAD_AIRPLANES_SUCCESS,
  LOAD_AIRPLANES_FAIL,
} from "./constants";

const airports = (
  state = { isLoading: true, page:0,  data: null, error: null },
  action
) => {
  if (action.type === LOAD_AIRPLANES) {
    return { ...state, isLoading: true, page:action.payload };
  }
  if (action.type === LOAD_AIRPLANES_SUCCESS) {
    return { ...state, isLoading: false, error: null, data: action.payload };
  }
  if (action.type === LOAD_AIRPLANES_FAIL) {
    return { ...state, isLoading: false, error: action.payload };
  }

  return state;
};

export default airports;
