import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <div>Home</div>
      </Link>
    </header>
  );
};

export default Header;
