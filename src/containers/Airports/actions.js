import axios from 'axios'
import { LOAD_AIRPORTS, LOAD_AIRPORTS_SUCCESS, LOAD_AIRPORTS_FAIL } from './constants'

export function loadAirports(page) {
    // Interpreted by the thunk middleware:
    return function (dispatch, getState) {
      const { airports } = getState()
  
      dispatch({
        type: LOAD_AIRPORTS,
        payload:page+1
      })
  
      axios.get(`/api/airports.${page}.json`).then(
        response =>
          dispatch({
            type: LOAD_AIRPORTS_SUCCESS,
            payload:response.data.data,
          }),
        error =>
          dispatch({
            type: LOAD_AIRPORTS_FAIL,
            payload:error,
          })
      )
    }
  }
   