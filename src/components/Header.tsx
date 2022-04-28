import React, { ReactNode } from 'react'
import { useState as State } from 'react';
import { useEffect as Effect } from 'react';
function header() {
  let myName:string[] = "Eliot Evergarden".split("");
  let [isHidden,setHidden] = State(true);
  let [isRotate,setRotate] = State(true);
  Effect(()=>{
    let menu = document.querySelector(".menu");
    menu!.addEventListener("click",e => {
        menu!.children[0].setAttribute("class", isRotate ? "rotateMenu1":"");
        menu!.children[1].setAttribute("class", isRotate ? "rotateMenu2":"");
      //  menu!.children[1].classList.toggle("rotateMenu2");
       document.querySelector("aside")!.setAttribute("class",isHidden ?"hidden":"");
       setHidden(!isHidden);
       setRotate(!isRotate);
    })
    
  },[isHidden,isRotate]);
  return (
    <header className='text-white p-3'>
      <ul>
       <li style={{animationDelay:"calc(0.1s * 0)"}}></li>
       <li style={{animationDelay:"calc(0.1s * 6)"}}></li>
       <li style={{animationDelay:"calc(0.1s * 20)"}}></li>
       <li style={{animationDelay:"calc(0.1s * 30)"}}></li>
       <li style={{animationDelay:"calc(0.1s * 12)"}}></li>
       <li style={{animationDelay:"calc(0.1s * 20)"}}></li>
       <li style={{animationDelay:"calc(0.1s * 2)"}}></li>
       <li style={{animationDelay:"calc(0.1s * 18)"}}></li>
       <li style={{animationDelay:"calc(0.1s * 4)"}}></li>
       <li style={{animationDelay:"calc(0.1s * 12)"}}></li>
       <li style={{animationDelay:"calc(0.1s * 6)"}}></li>
       <li style={{animationDelay:"calc(0.1s * 14)"}}></li>
       <li style={{animationDelay:"calc(0.1s * 16)"}}></li>
      </ul>
       <div className='provide d-sm-block d-md-flex align-items-center'>
        <div className="image bg-white p-1 rounded-circle mx-auto">
            <img src={require('../images/face.png')} alt="Face Smile "/> 
          </div>
          <div className='text'>
            <h4 className='text-left'>
              {myName.map((letter,index)=> <span key={index} className={letter.includes(" ")?"empty-span":""} style={{transitionDelay:`calc(0.1s * (${index} / 2))`}} >{letter}</span>)}
            </h4>
            <p className='m-0' data-element="Full Stack Developer F ^_^ As Designer">Full Stack Developer ^_^ As Designer </p>
          </div>
       </div>
        <div className='links px-5'>
          <h5>Contact Me : </h5> 
          <ul>
            <a href="mailto:farisburi@gmail.com"><i data-social="email" className='fa-solid fa-at'></i></a>
            <a href="https://www.linkedin.com/in/faris-buri-608525211/"><i data-social="Linked In" className='fa-brands fa-linkedin-in'></i></a>
            <a href="https://github.com/FarisBuri"><i data-social="Github" className='fa-brands fa-github-alt'></i></a>
          </ul>
        </div>
        <div className="menu"> 
            <span></span>
            <span></span>
        </div>
    </header>
    
  )
}

export default React.memo(header)


