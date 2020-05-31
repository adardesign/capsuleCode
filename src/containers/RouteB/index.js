import React from "react";
import { connect } from 'react-redux'
import axios from 'axios'
import Layout from '../../components/template/layout';



const RouteB = () => {
  return (
    <Layout header={{ name: "Vermont" }} classNames={{ header: 'routeB', body: 'Vermont' }}>
      Vermont is a state in the northeastern United States, known for its natural landscape, which is primarily forested. Part of the New England region, it's also known for being home to more than 100 19th-century covered wooden bridges, and as a major producer of maple syrup. Thousands of acres of mountain terrain are crossed by hiking trails and skiing slopes.
    </Layout>
  )
}



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


export default connect(mapStateToProps, mapDispatchToProps)(RouteB)




