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
  .intro {
    position: relative;
    color: hsl(0, 0%, 68%);
    font-weight: bold!important;
    letter-spacing: 7px!important;
    font-family: "Anonymous Pro", monospace!important;
    overflow: hidden;
    border-right: 2px solid hsl(0, 0%, 80%);
    white-space: nowrap;
    animation: typewriter 6s steps(44) 1s 1 normal both,
      blinkTextCursor 500ms infinite;
  }
  @keyframes typewriter {
    from {
      width: 0;
    }
    to {
      width: 710px;
    }
  }
  @keyframes blinkTextCursor {
    from {
      border-color: hsl(0, 0%, 80%);
    }
    to {
      border-color: transparent;
    }
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
