import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import LoginProvider from "./contexts/LoginContext.jsx";
// import "../src/mock/mock.js"; //開發時模擬伺服器回應

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  // <LoginProvider>
  //   <App />
  // </LoginProvider>
  <>
    <App />
  </>
);
