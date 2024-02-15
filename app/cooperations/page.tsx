"use client"

import React, { useContext } from 'react';
import { Context } from '../Context';
import Image from 'next/image'

 

export default function Page() {
  const { data } = useContext<any>(Context);
  return (
    <div>
          <div className="content_container" id="main">
  <div className="content_main" id="content">
    <h1>Cooperations</h1>
    <p>
      <span className="text-markierung">fsg3</span>
      <br />
      Communication and Design, München
      <br />
      Link:{" "}
      <a
        href="http://www.fsg3.de/"
        target="_blank"
        rel="noopener noreferrer"
      >
        www.fsg3.de
      </a>
    </p>
    <p>
      <span className="text-markierung">replug</span>
      <br />
      Link:{" "}
      <a
        href="http://www.replug.de/"
        target="_blank"
        rel="noopener noreferrer"
      >
        www.replug.de
      </a>
    </p>
    <br />
    <h1>Further Projects</h1>
    <p>
     
     
      
    </p>
    <p>
      <span className="text-markierung">top e.V.</span>
      <br />
      top, Verein zur Förderung kultureller Praxis
      <br />
      The non-profit association from Berlin organises and supports cultural projects. These can be conceived as collaborations or they can also provide ideas, resources and knowledge. Furthermore, they can have an interdisciplinary approach and promote international exchange.




      <br />
      Link:{" "}
      <a href="http://www.top-ev.de/"target="_blank"
        rel="noopener noreferrer"
      >
        www.top-ev.de
      </a>
    </p>
  </div>
 
  <div id="sidebar" className="content_sub">
    <span className="text-markierung">Top e.V.</span>
    <br/>
    <br/>
   
 
    <Image src="/assets/Mythcelium-Festival-News-Letter.jpg"
      alt="Workshop top"
     width="600" 
     height="600" 
        />   
    <div className="clear"></div>
  </div>
  </div>
  </div>
)
}