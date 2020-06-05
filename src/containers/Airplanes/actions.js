import axios from "axios";
import {
  LOAD_AIRPLANES,
  LOAD_AIRPLANES_SUCCESS,
  LOAD_AIRPLANES_FAIL,
} from "./constants";

export function loadAirplanes(page) {
  // Interpreted by the thunk middleware:
  return function (dispatch, getState) {
    dispatch({
      type: LOAD_AIRPLANES,
      payload: page + 1,
    });

    axios.get(`/api/airplanes.${page}.json`).then(
      (response) =>
        dispatch({
          type: LOAD_AIRPLANES_SUCCESS,
          payload: response.data.data,
        }),
      (error) =>
        dispatch({
          type: LOAD_AIRPLANES_FAIL,
          payload: error,
        })
    );
  };
}
