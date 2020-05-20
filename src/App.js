import React from "react";
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { combineReducers } from 'redux'
import Layout from './layout';
import "./styles.css";


const login = (state = { isLoggedIn: false }, action) => {
  if(action.type === 'loginSuccess'){
    return {...state, isLoggedIn: true}
  }
  return state;
}
const loading = (state = { isLoading: false }, action) => {
  return state;
}

const rootReducer = combineReducers({
  login,
  loading
})


const store = createStore(rootReducer)


export default function App() {

  return (
    <div className="App">
      <h1>APP</h1>
      <Provider store={store}>
        <Layout/>
      </Provider>
    </div>
  );
}
