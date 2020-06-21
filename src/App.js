import React from "react";
import { Provider } from 'react-redux'
import store from './store'
import Routes from './routes';
import "./styles.css";


const storeValue = store()

export default function App() {

  return (
    <div className="App">
      <header>
        <h1>Airline Manager 3.0</h1>
      </header>
      <Provider store={storeValue}>
        <Routes />
      </Provider>
    </div>
  );
}
