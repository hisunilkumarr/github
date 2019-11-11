import React from "react";
import Styles from "../../assets/styles/input/c_select.module.scss";

const Select = props => {
  const { select, input } = Styles;
  const { name, label, values, onChange } = props;

  return (
    <div className={select}>
      <div className={Styles.label}>{label}:</div>
      <select className={input} name={name} onChange={onChange}>
        <option value="All">All</option>
        {values.map(value => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
