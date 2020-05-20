import React, { useReducer, useContext, createContext, memo } from "react";

const StateContext = createContext();
const DispatchContext = createContext();

const Wrappper = () => {
  return (
    <div className="row">
      <ComponentA />
      <ComponentB />
    </div>
  );
};

const ComponentA = memo(() => {
  const dispatch = useContext(DispatchContext);

  return (
    <div className="column">
      ComponentA
      <button
        onClick={() => {
          dispatch({
            type: "increment",
            id: "b"
          });
        }}
      >
        incriment B
      </button>
      <ComponentA1 />
      <ComponentA2 />
    </div>
  );
});

const ComponentB = memo(() => {
  const dispatch = useContext(DispatchContext);

  return (
    <div className="column">
      ComponentB
      <button
        onClick={() => {
          dispatch({
            type: "increment",
            id: "a"
          });
        }}
      >
        update A
      </button>
      <ComponentB1 />
      <ComponentB2 />
    </div>
  );
});

const ComponentA1 = memo(() => {
  const _stateContext = useContext(StateContext);

  return <div>ComponentA1 {_stateContext.a}</div>;
});

const ComponentA2 = () => {
  const dispatch = useContext(DispatchContext);

  return (
    <div>
      ComponentA2
      <button
        onClick={() => {
          dispatch({
            type: "decrement",
            id: "b"
          });
        }}
      >
        decrement B
      </button>
    </div>
  );
};

const ComponentB1 = () => {
  const _stateContext = useContext(StateContext);

  return <div>ComponentB1 {_stateContext.b}</div>;
};

const ComponentB2 = () => {
  const dispatch = useContext(DispatchContext);

  return (
    <div>
      ComponentB2
      <button
        onClick={() => {
          dispatch({
            type: "decrement",
            id: "a"
          });
        }}
      >
        decrement A
      </button>
    </div>
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
      throw new Error();
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, { a: 0, b: 0 });

  return (
    <div className="App">
      <h1>Codes</h1>
      <DispatchContext.Provider value={dispatch}>
        <StateContext.Provider value={state}>
          <Wrappper />
        </StateContext.Provider>
      </DispatchContext.Provider>
    </div>
  );
}
