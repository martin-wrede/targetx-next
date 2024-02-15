import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import PfeilLinks from '../../public/assets/pfeil-links.svg';
import PfeilRechts from '../../public/assets/pfeil-rechts.svg';

let timerID = 0;

export default function Gallery({ projectNumber: number }) {
  const [counter, setCounter] = useState<number>(0);
  const [data, setData] = useState<any>([]);
  const timerRef = useRef<null | any>(null); // Use useRef to create a mutable reference

  const url: string = "/targetx-website/data2.json";
 // Ensure images is always an array
 const images = data[3]?.gallery_image_names || [];

 console.log(images[1])


  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          // throw new Error(response.status);
        }
        const data = await response.json();
        //   console.log(data);
        setData(data);
      } catch (error) {
        console.error(error);
      }
    };

    getData();
  }, [url]);

  useEffect(() => {
    timerID += 1;

    timerRef.current = setInterval(() => {
      setCounter((currentCounter: number) => {
        if (currentCounter >= 10 * (images.length || 1) - 1) {
          return 0;
        }
        if ((currentCounter - 8) % 10 === 0) {
          imageBlend(0);
        }
        if (currentCounter % 10 === 0) {
          imageBlend(1);
        }

        return currentCounter + 1;
      });
    }, 400);

    return () => {
      clearInterval(timerRef.current); // Use timerRef.current to clear the interval
    };
  }, [images]); // added images dependency

  function nextImageForward(nr: number) {
    setCounter((currentCounter: number) => {
      // if more than images.length, go back to 0
      if (currentCounter >= (images.length || 1) * 10 - 10) {
        return 0;
      } else {
        let newCounter = currentCounter + nr * 10;
        return newCounter;
      }
    });
  }

  function nextImageBackward(nr: number) {
    setCounter((currentCounter: number) => {
      // if less than 10, go back to the last set of images
      if (currentCounter < 10) {
        let newCounter = (images.length || 1) * 10 + nr * 10;
        return newCounter;
      } else {
        let newCounter = currentCounter + nr * 10;
        return newCounter;
      }
    });
  }

  // Blend effect
  function imageBlend(toggle: string) {
    const documentStyle: HTMLElement | null = document.getElementById('layer1');
    toggle = "0.5"; // assuming toggle is a string representing opacity value

    if (documentStyle) {
      documentStyle.style.opacity = toggle;
      documentStyle.style.transitionDuration = '0.5s';
    }
  }

 
  return (
    <div id="gallery1">

      <div id="layer1">
        <Image id="galleryimage" 
           src={images[Math.floor(counter / 10)]}
        
  

          width="1200"
          height="801"
          alt="Gallery" />
      </div>

      <div className="gallery-menu">
        <Image
          src={PfeilLinks}
          id="backward"
          alt="gallery left"
          width="46"
          height="46"
          onClick={() => nextImageBackward(-1)}
          className="gallery-menu-icon"
        />
        <span className="gallery-text">
          {Math.floor(counter / 10) + 1}/{images.length}
        </span>
        <Image
          src={PfeilRechts}
          alt="gallery right"
          width="46"
          height="46"
          id="forward"
          onClick={() => nextImageForward(1)}
          className="gallery-menu-icon"
        />
      </div>

    </div>
  );
}
