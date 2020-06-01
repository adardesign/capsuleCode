import React, { useReducer, useEffect } from "react";
import Layout from '../../components/template/layout'
import { DispatchContext, StateContext } from './contexts'
import { ComponentA, ComponentB } from './Tempbox'

const Wrappper = () => {
  return (
    <Layout header={{ name: "Montana" }} classNames={{ header: 'routeA', body: 'montana' }}>
      <div className="row">
        Montana is a western state defined by its diverse terrain ranging from the Rocky Mountains to the Great Plains. Its wide-open spaces include Glacier National Park, a vast wilderness preserve that passes into Canada. The park’s many snow-capped peaks, lakes and alpine hiking trails are showcased along its famed Going-to-the-Sun Road, stretching 50 miles.
        <ComponentA />
        <ComponentB />
      </div>
    </Layout>
  );
};


/////////////////////////////////////////////////////////

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { ...state, [action.id]: state[action.id] + 1 };
    case "decrement":
      return { ...state, [action.id]: state[action.id] - 1 };
    default:
      return state
  }
}

export default function App() {
  let storedState = sessionStorage.getItem("RouterAState");
  storedState = storedState ? JSON.parse(storedState) : { a: 0, b: 0 }

  const [state, dispatch] = useReducer(reducer, storedState);
  
  useEffect(() => {
    sessionStorage.setItem("RouterAState", JSON.stringify(state))
  }, [state]);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        <Wrappper />
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
}
