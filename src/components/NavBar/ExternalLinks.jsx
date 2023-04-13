import React from 'react';
import ghLogo from '../../assets/logo-github.svg';
import npmLogo from '../../assets/logo-npm.svg';
import liLogo from '../../assets/logo-linkedin.svg';
import mediumLogo from '../../assets/logo-medium.svg';

const ExternalLinks = () => {
  return (
    <div className="external-links">
      <a href="https://github.com/oslabs-beta/troveql" target="_blank">
        <img className="logo toobig" src={ghLogo} alt="" />
      </a>
      <a href="https://www.npmjs.com/package/troveql" target="_blank">
        <img className="logo" src={npmLogo} alt="" />
      </a>
      <a href="https://www.linkedin.com/company/troveql/" target="_blank">
        <img className="logo toobig" src={liLogo} alt="" />
      </a>
      <a
        href="https://medium.com/@shendo87/graphql-has-a-new-best-friend-80831fe412ac"
        target="_blank"
      >
        <img className="logo" src={mediumLogo} alt="" />
      </a>
    </div>
  );
};

export default ExternalLinks;
