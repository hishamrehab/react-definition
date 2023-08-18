import React from "react";
import ReactDOM from "react-dom";
import BackgroundImage from "./images/download (3).png"
export default function Main() {
  return (
    <main>
      <h1 className="main--title">Fun facts about React</h1>
      <ul className="main--facts">
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over look starts on GitHub</li>
        <li>Is maintained by Fasebook</li>
        <li>Powers thousands of enterprice apps, including mobile apps</li>
      </ul>
    </main>
  );
}
