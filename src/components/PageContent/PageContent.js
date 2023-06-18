import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Smile from "../content_components/Smile/Smile";
import Todo from "../content_components/Todo/Todo";
import Welcome from "../content_components/Welcome/Welcome";
import "./content.css";

class PageContent extends React.Component {
  render() {
    return <div className="content">
      <Routes>
        <Route index element = {<Welcome/>} />
        <Route path = "smile" element = {<Smile/>} />
        <Route path = "todo" element = {<Todo/>} />
      </Routes>
      </div>;
  }
}

export default PageContent;
