import React from "react";
import Navigation from "../Navigation/Navigarion";
import Content from "../Content/Content";
import "./cont.css";

class Container extends React.Component {
  render() {
    return (
      <div className="container">
        <Navigation />
        <Content />
      </div>
    );
  }
}

export default Container;
