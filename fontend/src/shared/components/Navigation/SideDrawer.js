import React from "react";
import "./SideDrawer.css";
import ReactDOM from "react-dom";
const SideDrawer = porps => {
  const content = <aside onClick={porps.onClick} className="side-drawer">{porps.children}</aside>;

  return ReactDOM.createPortal(content,document.getElementById('drawer-hook'))
};

export default SideDrawer;
