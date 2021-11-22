import React from "react";
import reactDom from "react-dom";

const text = <h1>Hello world!!!</h1>
const text2 = <h1>Hello react!!!</h1>

const rootDiv = document.querySelector("#root")

reactDom.render(
  <>
  {text}
  {text2}
  </>
  , rootDiv)