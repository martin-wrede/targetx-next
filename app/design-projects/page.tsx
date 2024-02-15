 "use client"

import React, { useContext } from 'react';
import { Context } from '../Context';
import Image from 'next/image'

export default function Page() {
 
   const {data} = useContext<any>(Context)



  let content = null
  if (data[2] && data[2].content_chapter) {
    content = data[2].content_chapter.map((chapter:any, index: any) => (
      <div key={index}>
        
        <h1>{chapter.content_h1}</h1> 
        <h2>{chapter.content_h2}</h2>
        <span>{chapter.content_h1_text}</span>
       {data[2] && data[2].sidebar_h2}
      <br /> 
      </div>
    ))
    }

    return (
        <div className="content_container" id="main">
      <div className="content_main" id="content">
      <h1>Graphic-Design</h1>

      <h2>Project Overview</h2>
        <p>
          <br />
          autenticon
          <br />
          Berkenheger
          <br />
          Diabetes Praxis, Berlin
          <br />
          DM Drogerie Markt
          <br />
          EXPO 2000
          <br />
          felix1
          <br />
          GIU
          <br />
          Historisches Museum Bremerhaven
          <br />
          Historisches Museum Saar
          <br />
          Humboldt Universität Berlin
          <br />
          J.J. Darboven
          <br />
          Kulturamt Bremen
          <br />
          myBet
          <br />
          NGBK Berlin
          <br />
          passus
          <br />
          Universität Karlsruhe / Fachbereich Informatik
          <br />
          Yello Strom
          <br />
          Ziener
          <br />
          ZKM / Zentrum für Kunst und Medientechnologie Karlsruhe
        </p>
      </div>
      <div id="sidebar" className="content_sub">
      <span className="text-markierung"> {data[2] && data[2].sidebar_h2}</span>
      <br />
              <br />
      {data[2] &&  <Image src={`${data[2].sidebar_image}`} alt="Image" width="200" height="500" />
        }
      <br />
              <br />
              
              
              <br />
              <br />
            </div>
      
          </div>
        );
      }
      