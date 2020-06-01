import React from "react";
import { connect } from 'react-redux'
import Layout from '../../components/template/layout';



const Airlines = () => {
  return (
    <Layout header={{ name: "Airlines" }} classNames={{ header: 'routeB', body: 'Vermont' }}>
      A list of airlines.
    </Layout>
  )
}


const mapStateToProps = (state) => ({
  isLoggedIn: state.login.isLoggedIn,
})



export default connect(mapStateToProps)(Airlines)




