import React from "react";
import ghLogo from '../assets/logo-github.svg'
import liLogo from '../assets/logo-linkedin.svg'

const EngineerCard = ({ name, title, pic, gitHubLink, linkedInLink }) => {

  return (
    <div className='engineer-card'>
      <img class='profile-pic'src={pic} alt="" />
      <div class='profile-info'>
        <h5>{name}</h5>
        <p>{title}</p>
        <div className='download-links'>
          <a href={linkedInLink}>
            <img className="logo" src={liLogo} alt="" />
          </a>
          <a href={gitHubLink}>
            <img className="logo" src={ghLogo} alt="" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default EngineerCard;