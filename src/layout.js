import React from 'react'
import { Router, Link } from "@reach/router";
import { connect } from 'react-redux'

import Sessions from './sessions'
import ProcedureCodes from './procedureCodes';


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



const Layout = ({ isLoggedIn, doLogin }) => {
    return (
        <div>
            {!isLoggedIn && (<button onClick={doLogin}>Login</button>)}
            {isLoggedIn && (
                <>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/sessions">sessions</NavLink>
                <NavLink to="/code">code</NavLink>
                
                 <Router>
                    <Sessions path="/sessions" />
                    <ProcedureCodes path="/code" />
                </Router>
                </>
            )}
        </div>
    )
}


const mapStateToProps = (state) => ({
    isLoggedIn: state.login.isLoggedIn
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    doLogin: () => dispatch({
        type: "loginSuccess"
    })
})


export default connect(mapStateToProps, mapDispatchToProps)(Layout)

