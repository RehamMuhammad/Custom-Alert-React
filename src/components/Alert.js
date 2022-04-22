import style from "./style.module.css";
import css from "classnames";
import React from "react";

export default function Alert({ children, type, message }) {

  /* The React.cloneElement() function returns a copy of a specified element.
  Additional props and children can be passed on in the function.
  You would use this function when a parent component wants to add or modify the prop(s) of its children.*/

  const renderElAlert = function () {
    return React.cloneElement(children);
  };

  return (
    <div className={css(style.alert, style[type])}>
      <span className={style.closebtn}>
        &times;
      </span>
      {children ? renderElAlert() : message}
    </div>
  );
}