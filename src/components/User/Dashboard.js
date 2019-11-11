import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Styles from "../../assets/styles/dashboard/c_dashboard.module.scss";
import Menu from "../UI/Menu";
import Repositories from "../User/Repositories/Repositories";

const Dashboard = props => {
  const { dashboard } = Styles;
  return (
    <div className={dashboard}>
      <Menu />
      <Switch>
        <Route path="/repositories" component={Repositories} />
        <Route path="/" component={Repositories} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default Dashboard;
