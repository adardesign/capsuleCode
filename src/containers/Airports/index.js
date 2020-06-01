import React from "react";
import { connect } from 'react-redux'
import Layout from '../../components/template/layout';



const RouteB = () => {
  return (
    <Layout header={{ name: "Airports" }} classNames={{ header: 'routeB', body: 'airports' }}>
      A list of airports
    </Layout>
  )
}


const mapStateToProps = (state) => ({
  isLoggedIn: state.login.isLoggedIn,
})



export default connect(mapStateToProps)(RouteB)




