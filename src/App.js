import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";

function App() {
  return (
    // BEM naming convention
    <div className="App">
      <Header />

      <div className="app__body">
        <Sidebar />
      </div>

      {/* App body */}

      {/* Side bar */}

      {/* Feed */}

      {/* Widgets */}
    </div>
  );
}

export default App;
