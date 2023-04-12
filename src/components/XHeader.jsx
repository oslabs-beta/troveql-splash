import React from 'react';
import troveLogo from '../assets/logo-trove.svg';
import ExternalLinks from './NavBar/ExternalLinks';
import InternalLinks from './NavBar/InternalLinks';

const Header = ({ isOpen, setOpen }) => {
  return (
    <header>
      <a href="header">
        <img className="logo" src={troveLogo} alt="" />
      </a>
      {!isOpen && <InternalLinks />}
      {!isOpen && <ExternalLinks />}
    </header>
  );
};

export default Header;
