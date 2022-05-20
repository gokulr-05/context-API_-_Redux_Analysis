import ctx from "./context";

import { useState, useReducer } from "react";

// let reducer = (state, action) => {
//   if (action.type === "inc") {
//     console.log("inc reducer");
//     return { counter: state.counter + 1 };
//   } else if (action.type === "dec") {
//     console.log("dec reducer");
//     return { counter: state.counter - 1 };
//   }
// };
let CtxProvider = (props) => {
  // let [latestState, dispatchFunc] = useReducer(reducer, { counter: 0 });

  let [state1, setState1] = useState(0);
  console.log("latestState=", state1);

  let inc = () => {
    console.log("inc in ctx provider");
    setState1((prev) => {
      return prev + 1;
    });
    // dispatchFunc({ type: "inc" });
  };
  let dec = () => {
    console.log("dec in ctx provider");
    setState1((prev) => {
      return prev - 1;
    });
    // dispatchFunc({ type: "dec" });
  };

  let val = {
    counter: state1,
    inc: inc,
    dec: dec,
  };

  return <ctx.Provider value={val}>{props.children}</ctx.Provider>;
};

export default CtxProvider;
