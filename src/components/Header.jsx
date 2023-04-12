import React from "react";
import ghLogo from '../assets/logo-github.svg'
import npmLogo from '../assets/logo-npm.svg'
import liLogo from '../assets/logo-linkedin.svg'
import troveLogo from '../assets/logo-trove.svg'
import mediumLogo from '../assets/logo-medium.svg'

const Header = () => {

  return (
    <header>
      <div className="site-links">
        <a href="header">
          <img className="logo" src={troveLogo} alt="" />
        </a>
        <a href="#download"><b>Download</b></a>
        <a href="#team-info"><b>Meet the Team</b></a>
      </div>
      <div className="external-links">
        <a href="https://github.com/oslabs-beta/troveql">
          <img className="logo toobig" src={ghLogo} alt="" />
        </a>
        <a href="">
          <img className="logo" src={npmLogo} alt="" />
        </a>
        <a href="https://www.linkedin.com/company/troveql/">
          <img className="logo toobig" src={liLogo} alt="" />
        </a>
        <a href="">
          <img className="logo" src={mediumLogo} alt="" />
        </a>
      </div>
    </header>
  )
}

export default Header;