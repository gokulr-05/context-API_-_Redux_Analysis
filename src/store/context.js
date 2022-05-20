import React from "react";

let ctxx = React.createContext({
  counter: 0,
  inc: (num) => {},
  dec: (num) => {},
});

export default ctxx;
