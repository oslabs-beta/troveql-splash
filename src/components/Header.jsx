import React from "react";
import ghLogo from '../assets/logo-github.svg'
import npmLogo from '../assets/logo-npm.svg'
import liLogo from '../assets/logo-linkedin.svg'
import troveLogo from '../assets/logo-trove.svg'

const Header = () => {

  return (
    <header>
      <div className="site-links">
        <a href="header">
          <img className="logo" src={troveLogo} alt="" />
        </a>
        <a href="#download">Download</a>
        <a href="#team-info">Meet the Team</a>
      </div>
      <div className="external-links">
        <a href="https://github.com/oslabs-beta/troveql">
          <img className="logo" src={ghLogo} alt="" />
        </a>
        <a href="">
          <img className="logo" src={npmLogo} alt="" />
        </a>
        <a href="">
          <img className="logo" src={liLogo} alt="" />
        </a>
      </div>
    </header>
  )
}

export default Header;