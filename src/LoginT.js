import React from "react";
import fbLogo from "./images/fb-logo.webp";
import fbWord from "./images/fb-word.svg";

function LoginT() {
  return (
    <>
      test for main
      <div className="login">
        <div className="login__logo">
          <img src={fbLogo} alt="fbLogo" />
          <img src={fbWord} alt="fbWord" />
        </div>
        /
      </div>
    </>
  );
}

export default LoginT;
