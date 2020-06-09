import React from "react";
import { connect } from "react-redux";
import { redirectTo } from "@reach/router";
import LoginPresentation from "../../components/organism/Login/";

function Login({ isLoggedIn, onLogin }) {
  if (isLoggedIn) {
    redirectTo("/home");
    return null;
  }
  return <LoginPresentation onLogin={onLogin} />;
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.login.isLoggedIn,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onLogin: () => {
    setTimeout(function () {
      const token = +new Date();
      sessionStorage.setItem("token", token);
      dispatch({
        type: "loginSuccess",
        payload: token,
      });
    }, 1000);
  },
  // TODO: hook up promise to do redirectTo("/home")
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
