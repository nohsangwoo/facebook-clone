import React from "react";
import Feed from "./Feed";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Widgets from "./Widgets";
import "./App.css";
import { useStateValue } from "./StateProvider";
// import LoginT from "./LoginT";
import fbLogo from "./images/fb-logo.webp";
import fbWord from "./images/fb-word.svg";
// import Login from "./Login";

function App() {
  const [{ user }, dispatch] = useStateValue(); // eslint-disable-line no-unused-vars
  console.log("user", user);
  return (
    // BEM naming convention
    <div className="App">
      {!user ? (
        <>
          <div className="login__logo">
            <img src={fbLogo} alt="fbLogo" />
            <img src={fbWord} alt="fbWord" />
          </div>
          {/* <h1>Login page this</h1> */}
          {/* <Login /> */}
          {/* <LoginT /> */}
        </>
      ) : (
        <>
          <h1>Success the login after into facebook feed page this</h1>
          <Header />
          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
