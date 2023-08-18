import React from "react";
import  ReactDOM  from "react-dom";
import Navbar from "./component/Navbar";
import Main from "./component/Main";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      <Navbar/>
      <Main />
    </div>
  );
}
ReactDOM.render(<App/>, document.getElementById("root"));
