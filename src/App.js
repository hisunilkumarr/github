import React from "react";
import { BrowserRouter } from "react-router-dom";
import Styles from "./App.module.scss";

import User from "./components/User/User";
import Dashboard from "./components/User/Dashboard";

const App = props => {
  return (
    <BrowserRouter>
      <div className={Styles.App}>
        <User />
        <Dashboard />
      </div>
    </BrowserRouter>
  );
};

export default App;
