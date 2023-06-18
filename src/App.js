import React from "react";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import { Outlet  } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="main-container">
        <Navigation />
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default App;
