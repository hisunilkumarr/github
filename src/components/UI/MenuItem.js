import React from "react";
import { NavLink } from "react-router-dom";
import Styles from "../../assets/styles/element/c_menu.module.scss";

const MenuItem = props => {
  const { link, exact, children } = props;
  return (
    <li className={Styles.item}>
      <NavLink to={link} exact={exact} activeClassName={Styles.active}>
        {props.name}
        {children}
      </NavLink>
    </li>
  );
};

export default MenuItem;
