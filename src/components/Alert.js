import style from "./style.module.css";
import css from "classnames";
import React, { useState } from "react";

export default function Alert({ children, type, message }) {
  const [isShow, setIsShow] = useState(true);

  const handleClose = (e) => {
    e.preventDefault();
    setIsShow(false);
  };
  /* The React.cloneElement() function returns a copy of a specified element.
  Additional props and children can be passed on in the function.
  You would use this function when a parent component wants to add or modify the prop(s) of its children.*/

  const renderElAlert = function () {
    return React.cloneElement(children);
  };

  return (
    <div className={css(style.alert, style[type], !isShow && style.hide)}>
      <span className={style.closebtn} onClick={handleClose}>
        &times;
      </span>
      {children ? renderElAlert() : message}
    </div>
  );
}