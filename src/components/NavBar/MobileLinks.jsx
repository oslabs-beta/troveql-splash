import React from 'react';

const MobileLinks = ({ isOpen, setOpen }) => {
  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    { isOpen } && (
      <div id="ml-container">
        <div>
          <a href="#download" onClick={handleLinkClick}>
            <b className="ml-item">Download</b>
          </a>
          <a href="#team-info" onClick={handleLinkClick}>
            <b className="ml-item">Meet the Team</b>
          </a>
          <a
            href="https://github.com/oslabs-beta/troveql"
            onClick={handleLinkClick}
          >
            <b className="ml-item">GitHub</b>
          </a>
          <a href="https://www.npmjs.com/package/troveql" onClick={handleLinkClick}>
            <b className="ml-item">NPM</b>
          </a>
          <a
            href="https://www.linkedin.com/company/troveql/"
            onClick={handleLinkClick}
          >
            <b className="ml-item">LinkedIn</b>
          </a>
          <a href="https://medium.com/@shendo87/graphql-has-a-new-best-friend-80831fe412ac" onClick={handleLinkClick}>
            <b className="ml-item">Medium</b>
          </a>
        </div>
      </div>
    )
  );
};

export default MobileLinks;
