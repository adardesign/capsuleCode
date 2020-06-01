import React, { lazy, Suspense } from 'react'
import { Router, Link } from "@reach/router";
import { connect } from 'react-redux'
import Login from './containers/Login/'
import LazyLoadingPage from './components/atoms/LazyLoadingPage/'
const RouteA = lazy(() => import('./containers/RouteA'));
const RouteB = lazy(() => import('./containers/RouteB'));
const Airlines = lazy(() => import('./containers/Airlines'));
const Airports = lazy(() => import('./containers/Airports'));

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
    <div className="row">
      <nav className="column">
        <ul>
          <li><NavLink to="/airlines">Airlines</NavLink></li>
          <li><NavLink to="/airports">Airports</NavLink></li>
          <li><NavLink to="/routeA">routeA</NavLink></li>
          <li><NavLink to="/routeB">routeB</NavLink></li>
        </ul>
      </nav>
      <div className="column">
        <Suspense fallback={<LazyLoadingPage />}>
          <Router>
            <RouteA path="/routeA" />
            <RouteB path="/routeB" />
            <Airlines path="/airlines" />
            <Airports path="/airports" />
          </Router>
        </Suspense>
      </div>
      </div>
  )
}



const mapStateToProps = (state) => ({
        isLoggedIn: state.login.isLoggedIn
})

export default connect(mapStateToProps)(Routes)

