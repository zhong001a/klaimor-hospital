import React from "react";
import "./MainHeader.css";

const MainHeader = (porps) => {
  return <header className="main-header">{porps.children}</header>;
};

export default MainHeader;
