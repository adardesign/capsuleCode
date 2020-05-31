import React from "react";
import { Provider } from 'react-redux'
import store from './store'
import Layout from './layout';
import "./styles.css";


const storeValue = store()

export default function App() {

  return (
    <div className="App">
      <h1>APP</h1>
      <Provider store={storeValue}>
        <Layout />
      </Provider>
    </div>
  );
}
