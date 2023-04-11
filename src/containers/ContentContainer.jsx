import React from "react";
import Highlight from "react-highlight";
import { addEndpoints, fetchRequest } from "../util/code-snippets";
import cacheFlow from '../assets/cache-flow.png';
import windowsLogo from '../assets/windows.svg'
import ubuntuLogo from '../assets/ubuntu.svg'
import appleLogo from '../assets/apple.svg'
import npmLogo from '../assets/logo-npm.svg'

const ContentContainer = () => {

  return (
    <div>
      <div id='title-display'>
        <h1 className='troveql'>troveQL</h1>
        <p>A GraphQL cache solution and monitoring platform</p>
      </div>
      <div id='top-content'>
        <div className='large-text'>
          <h3>An Intelligent Cache for Your GraphQL API</h3>
          <p>TroveQL utilizes a caching algorithm based on the  <a src='https://www.cs.cmu.edu/~natassa/courses/15-721/papers/arcfast.pdf'>Adaptive Replacement Cache</a>, resulting in a performant, adaptive cache that tunes itself based on real-time use patterns without requiring any input from you.</p>
          <p>In a nutshell, TroveQL works by maintaining a limited record of previously evicted cache entries to intelligently allocate cache resources between Recently Used and Frequently Used sub-portions of the cache. 
          </p>
          <p><strong>What does this mean for you?</strong> Optimal storage utilization and a highly responsive user experience for your application.</p>
        </div>
        <img className='diagram' src={cacheFlow} alt="" />
      </div>
      <div id='mid-content'>
        <div className='metrics-video'></div>
        <div className='large-text'>
          <h3>Monitor your Cache Performance</h3>
          <p>The Trove Metrics companion desktop application pulls data directly from the TroveQL cache on your development server, providing vital data on performance. Watch in real time as your queries get routed to the right sub-cache. Know the response time for each query. Build confidence in your GraphQL API.</p>
          <p>Built on the popular Electron.js runtime framework, Trove Metrics can provide valuable insight on your cache during development in your Windows, Mac, or Linux IDE.</p>
          <div aria-hidden='true' id='download'></div>
        </div>
      </div>
      <div id='bottom-content'>
        <h1>START HERE</h1>
        <div className="columns">
          <div className='large-text'>
            <h3>NPM Package</h3>
            <p>Click below to view the TroveQL npm package, where your journey to blazing fast cache performance begins!</p>
            <div className='download-links'>
              <a href="">
                <img className="logo-dark" src={npmLogo} alt="" />
              </a>
            </div>
          </div>
          <div className='large-text'>
            <h3>Metrics App</h3>
            <p>Select your platform to download the Trove Metrics app, which allows you to monitor the performance of the TroveQL cache in real time. </p>
            <div className='download-links'>
              <a href="">
                <img className="logo-dark" src={windowsLogo} alt="" />
              </a>
              <a href="">
                <img className="logo-dark" src={appleLogo} alt="" />
              </a>
              <a href="">
                <img className="logo-dark" src={ubuntuLogo} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>     
       {/* <div className='code-snippet'>
          <Highlight className='code'>
            {addEndpoints}
          </Highlight>
          <Highlight className='code'>
            {fetchRequest}
          </Highlight>
        </div>*/}

    </div>
  )
}

export default ContentContainer;