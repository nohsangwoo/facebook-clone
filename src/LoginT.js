import React from "react";

import Button from "@material-ui/core/Button";
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
        <Button type="submit">Sign in</Button>
      </div>
    </>
  );
}

export default LoginT;
