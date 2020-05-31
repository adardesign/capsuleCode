import React, { lazy, Suspense } from 'react'
import { Router, Link } from "@reach/router";
import { connect } from 'react-redux'
import Login from './containers/Login/'
import LazyLoadingPage from './components/atoms/LazyLoadingPage/'
const RouteA  = lazy(()=> import('./containers/RouteA'));
const RouteB = lazy(()=> import('./containers/RouteB'));

const NavLink = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      return {
        style: {
          color: isCurrent ? "red" : "blue"
        }
      };
    }}
  />
);



const Routes = ({ isLoggedIn }) => {
  if (!isLoggedIn) return <Login />
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink><br />
        <NavLink to="/routeA">routeA</NavLink><br />
        <NavLink to="/routeB">routeB</NavLink>
      </nav>
      <Suspense fallback={<LazyLoadingPage />}>
        <Router>
          <RouteA path="/routeA" />
          <RouteB path="/routeB" />
        </Router>
      </Suspense>
    </>
  )
}



const mapStateToProps = (state) => ({
  isLoggedIn: state.login.isLoggedIn
})

export default connect(mapStateToProps)(Routes)

