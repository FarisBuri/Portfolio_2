import React from 'react'
import { useState as State, useRef as Ref, useEffect as Effect } from 'react';
function header(props: any) {
  // Start Declration Variables 
  let myName: string[] = "Faris Buri".split(""),
    animationDelay: number[] = [0, 6, 20, 30, 12, 20, 2, 18, 4, 12, 6, 14, 16],
    [isHidden, setHidden] = State(true),
    [isRotate, setRotate] = State(true),
    refMneu = Ref(null),
    refHeader = Ref(null);
  // End Declration Variables 
  // Start Hand Aniamtion Open Aside
  let handleAnimation = () => {
    let menu: any = refMneu.current!;
    Array.from(menu.children).forEach((e: any) => {
      menu.addEventListener("click", () => {
        menu!.children[0].setAttribute("class", isRotate ? "rotateMenu1" : "");
        menu!.children[1].setAttribute("class", isRotate ? "rotateMenu2" : "");
        props.getElement.current!.setAttribute("class", isHidden ? "hidden" : "");
        setHidden(!isHidden);
        setRotate(!isRotate);
      })
    });

  };
  // End Hand Aniamtion Open Aside
  Effect(() => {
    // Set Menu To make in mobile work better 
    props.transfareMenu.current = refMneu.current;
    let header: any = refHeader.current;
    isHidden && handleAnimation();
    document.body.style.overflow = "hidden";
    props.getElement.current!.style.height = (window.innerHeight - header!.clientHeight) + "px";
    props.getElement.current!.style.setProperty("--height", (window.innerHeight - header!.clientHeight) + "px");
    // Exception Because I can't Arrive To Body Without use document Yofi 
    document.body.style.height = window.innerHeight + "px";
    props.getElement.current!.style.height = (window.innerHeight - header!.clientHeight) + "px";
    window.onresize = () => {
      props.getElement.current!.style.height = (window.innerHeight - header!.clientHeight) + "px";
      props.getElement.current!.style.setProperty("--height", (window.innerHeight - header!.clientHeight) + "px");
      // Exception Because I can't Arrive To Body Without use document Yofi 
      document.body.style.height = window.innerHeight + "px";
      props.getElement.current!.style.height = (window.innerHeight - header!.clientHeight) + "px";
    }
  }, []);


  return (
    <header className='text-white p-3' ref={refHeader}>
      {/* Square Animation */}
      <ul>
        {animationDelay.map((delay, index) => <li key={index} style={{ animationDelay: `calc(0.1s * ${delay})` }}></li>)}

      </ul>
      {/* Logo With Name & Job */}
      <div className='provide d-sm-block d-md-flex align-items-center'>
        <div className="image bg-white p-1 rounded-circle mx-auto">
          <img src='../../images/face.png' alt="Face Smile " />
        </div>
        <div className='text'>
          <h4 className='text-left'>
            {myName.map((letter, index) => <span key={index} className={letter.includes(" ") ? "empty-span" : ""} style={{ transitionDelay: `calc(0.1s * (${index} / 2))` }} >{letter}</span>)}
          </h4>
          <p className='m-0' data-element="Full Stack Developer ^_^">Full Stack Developer ^_^</p>
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


