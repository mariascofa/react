import React from 'react';
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import PageContent from "./components/PageContent/PageContent";

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="main-container">
        <Navigation />
        <PageContent />
      </div>
    </div>
  );
};

export default App;
