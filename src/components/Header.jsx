import React from "react";
import ghLogo from '../assets/logo-github.svg'
import npmLogo from '../assets/logo-npm.svg'
import liLogo from '../assets/logo-linkedin.svg'

const Header = () => {

  return (
    <header>
      <div className="site-links">
        <a href="">
          <img src="" alt="" />
        </a>
        <a href="#download">Download</a>
        <a href="#team">Meet the Team</a>
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