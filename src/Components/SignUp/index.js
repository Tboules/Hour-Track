import React from "react";
import "./SignUp.css";

const SignUp = ({ email, passWord, userName, onRegister }) => {
  return (
    <div className="signUpContainer">
      <form onSubmit={onRegister} className="signUp">
        <h1>Let's Get Started!</h1>
        <input onChange={userName} className="iUp" placeholder="Username" />
        <input onChange={email} className="iUp" placeholder="Email" />
        <input onChange={passWord} className="iUp" placeholder="Password" />
        <button type="submit" className="signUpButton">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
