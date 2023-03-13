import React from "react";

import "./Container.styles.css";

const Container = ({ children, isDark }) => {
  return <div className="container">{children}</div>;
};

export default Container;
