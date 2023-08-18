import React from "react";
import image from "./images/download (5).png";
export default function Navbar() {
  return (
    <nav>
      <img src={image} className="nav--icon" />
      <h3 className="nav--logo-text">React Facts</h3>
      <h4 className="nav--title">React Course - project 1</h4>
    </nav>
    );
}
