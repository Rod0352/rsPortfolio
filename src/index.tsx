import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
const css = `
@import url(https://fonts.googleapis.com/css?family=Anonymous+Pro);

  body {
    background-color: #343331;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Raleway;
  }

`;
const style = document.createElement("style");
style.appendChild(document.createTextNode(css));
document.head.appendChild(style);

const rootElement = document.getElementById("root") as
  | Element
  | DocumentFragment;
const root = createRoot(rootElement);
root.render(<App />);
