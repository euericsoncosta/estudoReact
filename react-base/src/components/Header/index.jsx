import React from "react";
import { FaHome, FaSignInAlt, FaUserAlt } from "react-icons/fa";
import { Nav } from "./styled";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Nav>
      <Link to="/">
        <FaHome size={26} />
      </Link>
      <Link to="/signIn">
        <FaSignInAlt size={26} />
      </Link>
      <Link to="/user">
        <FaUserAlt size={26} />
      </Link>
    </Nav>
  );
}
