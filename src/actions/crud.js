import axios from "axios";

export function read(instance, api, params) {
    const instanceType = `LOAD_${instance}` 
  // Interpreted by the thunk middleware:
  return function (dispatch, getState) {
    dispatch({
      type: instanceType,
      payload: params.page,
    });

    axios.get(`/api/${api}.${params.page}.json`).then(
      (response) =>
        dispatch({
          type: `${instanceType}_SUCCESS`,
          payload: response.data.data,
        }),
      (error) =>
        dispatch({
          type: `${instanceType}_FAIL`,
          payload: error,
        })
    );
  };
}
