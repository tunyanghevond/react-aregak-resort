import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { RoomProvider } from "./context/context";

ReactDOM.render(
  <React.StrictMode>
    <RoomProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RoomProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
