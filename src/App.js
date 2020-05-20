import React from "react";
import "./styles.css";
import Sessions from './sessions'
import ProcedureCodes from './procedureCodes';


export default function App() {

  return (
    <div className="App">
      <h1>APP</h1>
      <Sessions />
      <ProcedureCodes />
    </div>
  );
}
