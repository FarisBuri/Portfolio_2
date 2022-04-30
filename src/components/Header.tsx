import React from 'react'
import { useState as State , useRef as Ref, useEffect as Effect} from 'react';
function header(props:any) {
  // Start Declration Variables 
  let myName:string[] = "Eliot Evergarden".split(""),
  animationDelay:number[] = [0,6,20,30,12,20,2,18,4,12,6,14,16],
  [isHidden,setHidden] = State(true),
  [isRotate,setRotate] = State(true),
  refMneu = Ref(null),
  refHeader = Ref(null);
    // End Declration Variables 
    // Start Hand Aniamtion Open Aside
    let handleAnimation = () =>{
      let menu:any = refMneu.current!;
    Array.from(menu.children).forEach((e:any) => {
      menu.addEventListener("click",() => {
        menu!.children[0].setAttribute("class", isRotate ? "rotateMenu1":"");
        menu!.children[1].setAttribute("class", isRotate ? "rotateMenu2":"");
        props.getElement.current!.setAttribute("class",isHidden ?"hidden":"");
       setHidden(!isHidden);
       setRotate(!isRotate);
       console.log("We Dead Bruh");
    })
    });
    
  };
  // End Hand Aniamtion Open Aside
 Effect(()=>{
  let header:any = refHeader.current;
   isHidden && handleAnimation();
   props.getElement.current!.style.height = ( window.innerHeight - header!.clientHeight )+ "px";
   props.getElement.current!.style.setProperty("--heihgt",( window.innerHeight - header!.clientHeight )+ "px");
    
  },[]);
  
  return (
    <header className='text-white p-3' ref={refHeader}>
      {/* Square Animation */}
      <ul>
       {animationDelay.map((delay,index) => <li key={index} style={{animationDelay:`calc(0.1s * ${delay})`}}></li>)}
      
      </ul>
      {/* Logo With Name & Job */}
       <div className='provide d-sm-block d-md-flex align-items-center'>
        <div className="image bg-white p-1 rounded-circle mx-auto">
            <img src='../../images/face.png' alt="Face Smile "/> 
          </div>
          <div className='text'>
            <h4 className='text-left'>
              {myName.map((letter,index)=> <span key={index} className={letter.includes(" ")?"empty-span":""} style={{transitionDelay:`calc(0.1s * (${index} / 2))`}} >{letter}</span>)}
            </h4>
            <p className='m-0' data-element="Full Stack Developer ^_^ As Designer">Full Stack Developer ^_^ As Designer </p>
          </div>
       </div>
       {/* Social Media  */}
        <div className='links px-5'>
          <h5>Contact Me : </h5> 
          <ul>
            <a href="mailto:farisburi@gmail.com"><i data-social="email" className='fa-solid fa-at'></i></a>
            <a href="https://www.linkedin.com/in/faris-buri-608525211/"><i data-social="Linked In" className='fa-brands fa-linkedin-in'></i></a>
            <a href="https://github.com/FarisBuri"><i data-social="Github" className='fa-brands fa-github-alt'></i></a>
          </ul>
        </div>
        {/* Menu To Open Aside */}
        <div className="menu" ref={refMneu} onClick={handleAnimation}> 
            <span></span>
            <span></span>
        </div>
    </header>
    
  )
}

export default React.memo(header)


