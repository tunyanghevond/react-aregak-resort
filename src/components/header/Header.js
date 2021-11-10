import React from "react";

const Header = ({ children, headerStyle }) => {
  return <header className={headerStyle}>{children}</header>;
};

export default Header;

Header.defaultProps = {
  headerStyle: "default-header",
};
