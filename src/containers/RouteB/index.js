import React from "react";
import { connect } from 'react-redux'
import axios from 'axios'
import Vermont from './Vermont'

// actions
function loadSessionData(params) {
  console.log(params)
  return (dispatch, getState) => {
    const RouteBState = getState().RouteB;
    console.log(RouteBState);
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
  data: state.RouteB.data,
  filters: state.RouteB.filters,
  search: state.RouteB.search,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadData: (params) => dispatch(loadSessionData(params))
})


export default connect(mapStateToProps, mapDispatchToProps)(Vermont)




