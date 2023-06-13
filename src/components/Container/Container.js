import React from "react";
import Navigation from "../Navigation/Navigarion";
import HomeContent from "../Home/Home";
import "./cont.css";

class Container extends React.Component {
  render() {
    return (
      <div className="container">
        <Navigation />
        <HomeContent />
      </div>
    );
  }
}

export default Container;
