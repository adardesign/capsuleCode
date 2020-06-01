import React from "react";
import { connect } from 'react-redux'
import Layout from '../../components/template/layout';



const RouteB = () => {
  return (
    <Layout header={{ name: "Vermont" }} classNames={{ header: 'Montana', body: 'viewer' }}>
      Vermont is a state in the northeastern United States, known for its natural landscape, which is primarily forested. Part of the New England region, it's also known for being home to more than 100 19th-century covered wooden bridges, and as a major producer of maple syrup. Thousands of acres of mountain terrain are crossed by hiking trails and skiing slopes.
    </Layout>
  )
}


const mapStateToProps = (state) => ({
  isLoggedIn: state.login.isLoggedIn,
  data: state.RouteB.data,
  filters: state.RouteB.filters,
  search: state.RouteB.search,
})



export default connect(mapStateToProps)(RouteB)




