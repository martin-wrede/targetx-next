"use client"

import React, { useContext } from 'react';
import { Context } from '../Context';
import Image from 'next/image'
import Gallery from '../components/Gallery';

export default function Page() {
 
   const {data} = useContext<any>(Context)

   let content = null;

        
      
        if (data[3] && data[3].content_chapter) {
          content = data[3].content_chapter.map((chapter:any, index:number) => (
            <div key={index}>
              <h1>{chapter.content_h1}</h1>
              <h2>{chapter.content_h2}</h2>
              <span>{chapter.content_h1_text}</span>
      
              <Image
                className="content-image"
                src={`${chapter.content_h2_image}`}
               alt="Poster"
               width="768"
               height="1081"
              />
               <div id="text1" ><i>{chapter.content_h2_text1}</i></div>
               <br />
            <br /> 
            Tasks: <br /> 
            <span>{ chapter.content_h2_text2}</span> <br />
           
              <br />
              {/* 
              <button onClick={() => window.open(chapter.button_url)}>{chapter.button}</button>
              */}
              <br />
              <br />
            </div>
          ));
        }
      
        return (
          <div>
            <div className="content_container" id="main">
              <div className="content_main" id="content">
                {content}
              </div>
            </div>
            <div id="sidebar" className="content_sub">
              <span className="text-markierung"> {data[3] && data[3].sidebar_h2}</span>
              <br />
              <br />
             
              <Gallery projectNumber="3" />
              <br />
              <br />
              <Gallery projectNumber="2" />
              <br />
              <br />

               
              
              <br />
              <br />
            </div>
           
          </div>
        );
      }
      