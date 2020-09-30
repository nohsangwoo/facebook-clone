import React from "react";
import "./Login.css";
import Button from "@material-ui/core/Button";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";
import fbLogo from "./images/fb-logo.webp";
import fbWord from "./images/fb-word.svg";

function Login() {
  const [state, dispatch] = useStateValue(); // eslint-disable-line no-unused-vars

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };
  return (
    <>
      <div className="login">
        <div className="login__logo">
          <img src={fbLogo} alt="fbLogo" />
          <img src={fbWord} alt="fbWord" />
        </div>
        <Button type="submit" onClick={signIn}>
          Sign in
        </Button>
      </div>
    </>
  );
}

export default Login;
