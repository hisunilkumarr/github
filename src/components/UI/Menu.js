import React from "react";
import Styles from "../../assets/styles/element/c_menu.module.scss";

import MenuItem from "./MenuItem";
import Badge from "./Badge";

const Menu = props => {
  return (
    <ul className={Styles.menu}>
      <MenuItem link="/overview" name="Overview">
        <Badge />
      </MenuItem>
      <MenuItem link="/repositories" exact name="Repositories">
        <Badge />
      </MenuItem>
      <MenuItem link="/stars" name="Stars">
        <Badge />
      </MenuItem>
      <MenuItem link="/followers" name="Followers">
        <Badge />
      </MenuItem>
      <MenuItem link="/following" name="Following">
        <Badge />
      </MenuItem>
    </ul>
  );
};

export default Menu;
