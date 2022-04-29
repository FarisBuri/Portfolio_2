import React  from 'react'
import { useRef , useState } from 'react';
import { useEffect } from 'react';
import { deflate } from 'zlib';


function Aside(props:any) {
  let refPageLi = useRef(null);
  let refPageUl = useRef(null);
  useEffect(()=>{
    // Set refASide
    // Add Height To Aside 
    document.querySelector("aside")!.style.height = ( window.innerHeight - document.querySelector("header")!.clientHeight )+ "px";
    document.querySelector("[data-fill='Home']")?.parentElement?.classList.add("active");
  },[])
  let pages = [
    {page: "Home",icon: "fa fa-home"},
    {page: "About Me",icon: "fa fa-user"},
    {page: "Resume",icon: "fa fa-file-pdf"},
    {page: "Services",icon: "fa-solid fa-face-grin-squint"},
    {page: "Skills",icon: "fa-solid fa-briefcase"},
    {page: "Testimonials",icon: "fa-brands fa-slideshare"}
  ];
    let navCount:number = Number(pages.length - 1),
     [counter, setCounter] = useState(0);
     window.onwheel = (e) => {
      if(e.deltaY > 0) {

        counter === navCount ? setCounter((prev)=> prev = 0) : setCounter((prev)=> prev + 1) ;
        console.log("Down",counter);
        removeAddWheel(counter);
        
      } else {
        counter === 0 ? setCounter((prev)=> prev = navCount) : setCounter((prev) => prev - 1); 
        console.log("Top",counter);
        removeAddWheel(counter);
      }
    };
    let AddRemoveClick = (e:any) => {
      let uiCurrent:any = refPageUl.current!;
      Array.from(uiCurrent.children).forEach((li:any) => {
        li.classList.remove("active");
      }); 
      e.target.classList.add("active");
      setCounter((prev) => prev = e.target.dataset.count - 1);
    }

    
  return (
    <aside className="" ref={props.transfare}>
      <ul className='pages' ref={refPageUl}>
        {pages.map(({page,icon}, index) =>
          <li key={index} data-count={index} ref={refPageLi} onClick={(e)=>AddRemoveClick(e)}>
            <i className={icon}></i>
            <label data-fill={page}>{page}</label>
            <span></span>
          </li>)}
      </ul>
    
    </aside>
  )
}
function removeAddWheel(counter:number) {
  document.querySelectorAll(".pages li").forEach(page => page.classList.remove("active"));
  document.querySelectorAll(".pages li")[counter].classList.add("active");
  console.log("inside Function", counter);
}
export default React.memo(Aside)
