import React from "react";
import "./App.css";
import { IntersectionObserver } from "../intersectionObserver";
import { BulletList } from "react-content-loader";
import { DynamicModule } from "../dynamicModule";

function App() {
  return (
    <div className="App">
      <IntersectionObserver id={"First"}>
        <h1>Stuff1</h1>
      </IntersectionObserver>
      <IntersectionObserver id={"Second"}>
        <h1>Stuff2</h1>
      </IntersectionObserver>
      <IntersectionObserver id={"Third"}>
        <h1>Stuff3</h1>
      </IntersectionObserver>
      <IntersectionObserver id={"Fourth"}>
        <DynamicModule
          placeholder={<BulletList />}
          component={() => import("../dummy")}
        />
      </IntersectionObserver>
      <IntersectionObserver id={"Fifth"}>
        <h1>Stuff5</h1>
      </IntersectionObserver>
    </div>
  );
}

export default App;
