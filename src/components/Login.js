import React from "react";
import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";
import { auth } from "../firebase";
import { GoogleAuthProvider } from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth";
import { signInWithRedirect } from "firebase/auth";

import "firebase/auth";

const Login = () => {
  return (
    <div id="login-page">
      <div id="login-card">
        <h2>Welcome to React EChat</h2>
        <div
          className="login-button google"
          onClick={() => {
            // auth.signInWithRedirect(new GoogleAuthProvider());
            signInWithRedirect(auth, new GoogleAuthProvider());
          }}
        >
          <GoogleOutlined /> Sign in with Google
        </div>
        <br />
        <br />
        <div
          className="login-button facebook"
          onClick={() => {
            signInWithRedirect(auth, new FacebookAuthProvider());
          }}
        >
          <FacebookOutlined /> Sign in with Facebook
        </div>
      </div>
    </div>
  );
};

export default Login;
