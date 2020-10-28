import React from "react";
import {Link} from "react-router-dom";

export default function Header() {
  return (
    <header className="header center" style={headerStyle}>
      <h1>React Todo List</h1>
      <Link to="/" style={linkStyle}>Home</Link> | <Link to="/about" style={linkStyle}>About</Link> 
    </header>
  );
}

const headerStyle = {
  padding: "10px"
};

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontSize: "1.2em"
}