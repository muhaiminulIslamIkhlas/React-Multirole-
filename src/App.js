import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./assets/images/logo.svg";
import "./assets/css/global.css";
import Login from "./components/auth/Login";

function App() {
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
