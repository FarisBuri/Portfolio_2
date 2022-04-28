import React, { ReactElement, ReactFragment } from 'react'
import { useEffect } from 'react';


function Aside() {
  useEffect(()=>{
    // Add Height To Aside 
     document.querySelector("aside")!.style.height = ( window.innerHeight - document.querySelector("header")!.clientHeight )+ "px";
     document.querySelector("[data-fill='Home']")?.parentElement?.classList.add("active");
  },[])
  let pages = [{page: "Home",icon: "fa fa-home"},{page: "About Me",icon: "fa fa-user"},{page: "Resume",icon: "fa fa-file-pdf"},{page: "Services",icon: "fa-solid fa-face-grin-squint"},{page: "Skills",icon: "fa-solid fa-briefcase"},{page: "Testimonials",icon: "fa-brands fa-slideshare"}];

  return (
    <aside className="">
      <ul className='pages'>
        {pages.map(({page,icon}, index) =>
          <li key={index}>
            <i className={icon}></i>
            <label data-fill={page}>{page}</label>
            <span></span>
          </li>)}
      </ul>
    
    </aside>
  )
}

export default React.memo(Aside)
