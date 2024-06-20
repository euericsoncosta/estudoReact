import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Nav } from './styled';

export default function Header() {
  return (
    <Nav>
      <a href="#">
        <FaHome size={26} />
      </a>
      <a href="#">
        <FaSignInAlt size={26} />
      </a>
      <a href="#">
        <FaUserAlt size={26} />
      </a>
    </Nav>
  );
}
