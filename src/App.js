import React from "react";
import "./App.css";
import Feed from "./Feed";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Widgets from "./Widgets";
import Login from "./Login";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue(); // eslint-disable-line no-unused-vars
  console.log("user", user);
  return (
    // BEM naming convention
    <div className="App">
      {!user ? (
        <>
          <h1>Login page this</h1>
          {/* <Login /> */}
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
