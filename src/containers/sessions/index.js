import React from "react";
import { connect } from 'react-redux'
import axios from 'axios'
import Sessions from './session';


// actions
function loadSessionData(params) {
  console.log(params)
  return (dispatch, getState) => {
    const sessionsState = getState().sessions;
    console.log(sessionsState);
    axios.get("api/sessions/index.json").then( response =>{
      dispatch({
        type: "SESSION_GET_DATA_SUCCESS", 
        payload: response.data
      })
    })
  }
}


const mapStateToProps = (state) => ({
  isLoggedIn: state.login.isLoggedIn,
  data: state.sessions.data,
  filters: state.sessions.filters,
  search: state.sessions.search,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadData: (params) => dispatch(loadSessionData(params))
})


export default connect(mapStateToProps, mapDispatchToProps)(Sessions)




