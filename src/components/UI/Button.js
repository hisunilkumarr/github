import React from "react";
import Styles from "../../assets/styles/input/c_button.module.scss";

const Button = props => {
  const { classes, name } = props;

  return (
    <button
      className={[Styles.button, Styles[classes]].join(" ")}
      type="button"
    >
      {name}
    </button>
  );
};

export default Button;
