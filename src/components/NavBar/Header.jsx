import React, { useState } from 'react';
import troveLogo from '../../assets/logo-trove.svg';
import ExternalLinks from './ExternalLinks';
import InternalLinks from './InternalLinks';
import { MenuToggle } from './MenuToggle';
import { useMediaQuery } from 'react-responsive';

const Header = ({ isOpen, setOpen }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <header>
      <a href="header">
        <img className="logo" src={troveLogo} alt="" />
      </a>
      <div className="header-links">
        {!isMobile && <InternalLinks />}
        {!isMobile && <ExternalLinks />}
        {isMobile && (
          <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
        )}
      </div>
    </header>
  );
};

export default Header;
