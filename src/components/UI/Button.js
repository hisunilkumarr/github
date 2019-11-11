import React from "react";
import Styles from "../../assets/styles/input/c_button.module.scss";

const Button = props => {
  const { classes, name } = props;
  let newClasses = String(classes);
  console.log("Class:", newClasses);
  console.log("Class:", Styles.newClasses);

  return (
    <button className={[Styles.button, Styles.green].join(" ")} type="button">
      {name}
    </button>
  );
};

export default Button;
