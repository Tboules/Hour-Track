import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="navBar">
      <h1 className="title">Epic To-Do List</h1>
      <ul className="userNav">
        <li className="nav signIn">Sign In</li>
        <li className="nav register">Register</li>
        <li className="nav logOut">Log Out</li>
      </ul>
    </div>
  );
};

export default Header;
