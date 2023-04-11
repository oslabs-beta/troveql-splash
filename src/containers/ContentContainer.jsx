import React from "react";
import Highlight from "react-highlight";
import { addEndpoints, fetchRequest } from "../util/code-snippets";

const ContentContainer = () => {

  return (
    <div>
      <div id='title-display'>
        <h1 className='troveql'>troveQL</h1>
        <p>A GraphQL cache solution and monitoring platform</p>
      </div>
      <div id='top-content'>
        <div className='large-text'>
          <h3>Performant Cache for Your Server</h3>
          <p>TroveQL utilizes a caching algorithm based on the  <a src='https://www.cs.cmu.edu/~natassa/courses/15-721/papers/arcfast.pdf'>Adaptive Replacement Cache</a>, resulting in a performant, adaptive cache that self-tunes to favor Least Frequently Used or Least Recently Used caching strategies based on real-time use patterns. </p>
        </div>
        <div className='code-snippet'>
          <Highlight className='code'>
            {addEndpoints}
          </Highlight>
          <Highlight className='code'>
            {fetchRequest}
          </Highlight>
          
          <img src="" alt="" />
        </div>
      </div>
      <div id='mid-content'>
        <div className='metrics-video'></div>
        <div className='large-text'>
          <h3>Monitor Your Cache Performance</h3>
          <p>Trove Metrics companion app plugs directly into your TroveQL server cache, providing vital data on the performance of the cache, including statistics on how the ARC algorithm is updating the tuning of the cache to provide best results.</p>
        </div>
      </div>
      <div id='bottom-content'>
        <div className='large-text'>
          <h3>Performant Cache for Your Server</h3>
          <p>TroveQL utilizes a caching algorithm based on the  <a src='https://www.cs.cmu.edu/~natassa/courses/15-721/papers/arcfast.pdf'>Adaptive Replacement Cache</a>, resulting in a performant, adaptive cache that self-tunes to favor Least Frequently Used or Least Recently Used caching strategies based on real-time use patterns. </p>
        </div>
        <div className='code-snippet'>
          <Highlight className='code'>
            {addEndpoints}
          </Highlight>
          
          <img src="" alt="" />
        </div>
      </div>
    </div>
  )
}

export default ContentContainer;