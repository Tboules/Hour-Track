import React from "react";
import "./Header.css";
import { auth } from "../../firebase";

const Header = ({ route, toSignIn, toSignUp }) => {
  const handleLogOut = () => {
    auth.signOut().catch((error) => alert(error.message));
  };

  return (
    <div className="navBar">
      <h1 className="title">Epic To-Do List</h1>
      <ul className="userNav">
        {route === "home" ? (
          <li onClick={handleLogOut} className="nav logOut">
            Log Out
          </li>
        ) : (
          <div>
            <li onClick={toSignIn} className="nav signIn">
              Sign In
            </li>
            <li onClick={toSignUp} className="nav register">
              Sign Up
            </li>
          </div>
        )}
      </ul>
    </div>
  );
};

export default Header;
