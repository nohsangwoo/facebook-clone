import React from "react";
import Feed from "./Feed";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Widgets from "./Widgets";
import "./App.css";
import { useStateValue } from "./StateProvider";
import Login from "./Login";

function App() {
  const [{ user }, dispatch] = useStateValue(); // eslint-disable-line no-unused-vars
  console.log("user", user);
  return (
    <div className="App">
      <div>main</div>
      {!user ? (
        <>
          test for body
          <div>test for div</div>
          <div className="login__logo">
            <div>class</div>
          </div>
          <Login />
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
