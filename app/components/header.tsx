'use client';

import React, { useState } from 'react'
 
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import Image from 'next/image'




 const Header = () => {
    const [menuShown, setMenuShown ] = useState(false)
  const [hamburgerIcon, setHamburgerIcon ] = useState<string>('block')
  const [browserWidth,setBrowserWidth] = useState<number>(window.outerWidth)
  
{/** 
let onresize = function(e) {
    //note i need to pass the event as an argument to the function
    let width = e.target.outerWidth;
    setBrowserWidth(width)
    
   // document.getElementById('hamburger').style.display = 'block'
   
    const hamburgerVar = document.getElementById('hamburger')

    browserWidth < 650 ? hamburgerVar.style.display = 'block'  : hamburgerVar.style.display = 'none'
      setHamburgerIcon(hamburgerVar.style.display)
  //   console.log(hamburgerIcon)
  browserWidth > 650 ?  document.getElementById("menu").style.display = 'block' : document.getElementById("menu").style.display = 'none'

    }
 
   window.addEventListener("resize", onresize);

   */}

  function toggleMenu(){ 
            let toggleMenu: HTMLElement | null = document.getElementById("menu")           
      console.log(browserWidth)
        if (browserWidth<650  &&   hamburgerIcon === 'block' && menuShown  === false ){
            toggleMenu.style.opacity  = '1'
            toggleMenu.style.display = 'block'
            setMenuShown(true)  
            
        }
      else if(browserWidth<650  && hamburgerIcon === 'block' && menuShown  === true ){
        toggleMenu.style.opacity  = '0'   
        toggleMenu.style.display = 'none'
            setMenuShown(false)  
         
        }
        
  }

    return (
        <header  id="header">
        <div className="logo-container logo" >
       
        <Link href="/"  >
          <Image id="logo" src="assets/targetx-logo-outl.svg" alt="Logo"  width="74" height="23" />
            <div style={{opacity:"0", width:"100%", height:"100%"}}>targetx.de</div>
          </Link>
        </div>
        <div id="button1" onClick={toggleMenu} className="menu-icon">
        <span className="menu-format"><div id="hamburger">
			<div className="hamburger-streifen"></div>
			<div className="hamburger-streifen"></div>
			<div className="hamburger-streifen"></div>
			</div> </span>
        </div>
    <nav>
    <div id="menu"  >
    <div   >
      <ul  >
      <li>
        <Link href="/design-thinking" 
        onClick={toggleMenu}
        > Design Thinking </Link>
      </li>
      <li  className = "dropdown-menu"  
       onClick={toggleMenu}
       ><Link href="/design-projects" >Design Projects</Link>
      <ul className="sub-menu">
        <li><Link href="/hist-museum-bremerhaven" >• Hist. Museum Bremerhaven</Link>
        </li>
        <li>
          <Link href="/kammerkonzerte"  
           onClick={toggleMenu} 
          >• Kammerkonzerte</Link>
        </li>
        <li>
          <Link href="/passus"
           onClick={toggleMenu}
          >• Passus</Link>
        </li>
      </ul>
      </li>
      <li>
        <Link href="/cooperations" 
         onClick={toggleMenu}
        >Cooperations</Link>
      </li>
      <li>
        <Link href="/contact" 
         onClick={toggleMenu}
        >Contact</Link>
      </li>
      </ul>


    </div>
    </div>
     
    </nav>
    </header>

    )

}

export default  Header