
import React from "react";

import "./App.css";
import Header from "./pages/layout/header";

import Router from "./router";

const App = () => {
  return (
    <div className="relative w-full">
      <Header />
      <Router />
    </div>
  );
};

export default App;
