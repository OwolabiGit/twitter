import React from "react";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";
import "./App.css";

function App() {
  return (
    // BEM
    <div className="app">
      <h1>OWOLABI'S TWITTER</h1>
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  );
}

export default App;
