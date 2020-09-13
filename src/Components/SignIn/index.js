import React from "react";
import "./SignIn.css";

const SignIn = ({ email, passWord, onSignIn }) => {
  return (
    <div className="signUpContainer">
      <form onSubmit={onSignIn} className="signUp">
        <h1>Welcome Back!</h1>
        <input onChange={email} className="iUp" placeholder="Email" />
        <input
          type="password"
          onChange={passWord}
          className="iUp"
          placeholder="Password"
        />
        <button type="submit" className="signUpButton">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;
