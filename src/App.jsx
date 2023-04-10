import React from "react";
import { Header } from "./components/Header";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="sm-container">
      <div>
        <Header />
      </div>
      <div>
        <Outlet />
      </div>
      <div></div>
    </div>
  );
};

export default App;
