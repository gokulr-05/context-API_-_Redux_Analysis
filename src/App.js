import ctxx from "./store/context";

import { useContext } from "react";
function App() {
  let ctx1 = useContext(ctxx);

  console.log("ctx1=", ctx1);

  let inc = () => {
    console.log("in App js : inc");
    ctx1.inc(1);
    console.log("END in App js : inc");
  };

  let dec = () => {
    console.log("in App js : dec");
    ctx1.dec(1);
    console.log("END in App js : dec");
  };

  return (
    <div>
      <h1>{`Counter Value: ${ctx1.counter}`}</h1>
      <button onClick={inc} className="btn btn-primary">
        increment counter
      </button>
      <button onClick={dec} className="btn btn-primary">
        decrement counter
      </button>
    </div>
  );
}

export default App;
