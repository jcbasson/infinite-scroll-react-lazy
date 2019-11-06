import React from "react";
import "./App.css";
import { Dummy } from "./intersectionObserver";

function App() {
  return (
    <div className="App">
      <Dummy id={"First"}>
        <h1>Stuff1</h1>
      </Dummy>
      <Dummy id={"Second"}>
        <h1>Stuff2</h1>
      </Dummy>
      <Dummy id={"Third"}>
        <h1>Stuff3</h1>
      </Dummy>
      <Dummy id={"Fourth"}>
        <h1>Stuff4</h1>
      </Dummy>
      <Dummy id={"Fifth"}>
        <h1>Stuff5</h1>
      </Dummy>
    </div>
  );
}

export default App;
