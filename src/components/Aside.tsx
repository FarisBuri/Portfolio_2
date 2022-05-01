import React from 'react'
import { useRef, useState } from 'react';
import { useEffect } from 'react';


function Aside(props: any) {
  // Start Declration Variables
  let refPageLi = useRef(null),
    refPageUl = useRef(null);
  let pages = [
    { page: "Home", icon: "fa fa-home" },
    { page: "Skills", icon: "fa fa-laptop-code" },
    { page: "Resume", icon: "fa fa-file-pdf" },
    { page: "Services", icon: "fa-solid fa-face-grin-squint" },
    { page: "Projects", icon: "fa-solid fa-briefcase" },
    { page: "Testimonials", icon: "fa-brands fa-slideshare" }
  ];
  let navCount: number = Number(pages.length - 1),
    [counter, setCounter] = useState<number>(1);
  // End Declration Variables

  //  Start Functions When [Wheel , Click] Choice On Aside

  window.onwheel = (e) => {
    if (e.deltaY > 0) {

      counter === navCount ? setCounter((prev) => prev = 0) : setCounter((prev) => prev + 1);
      console.log("Down", counter);
      removeAddWheel(counter);

    } else {
      counter === 0 ? setCounter((prev) => prev = navCount) : setCounter((prev) => prev - 1);
      console.log("Top", counter);
      removeAddWheel(counter);
    }
  };
  let AddRemoveClick = (e: any) => {
    let uiCurrent: any = refPageUl.current!;
    Array.from(uiCurrent.children).forEach((li: any) => {
      li.classList.remove("active");
    });
    e.target.classList.add("active");
    setCounter((prev) => prev = e.target.dataset.count - 1);
  }
  let removeAddWheel = (counter: number) => {
    let ul: any = refPageUl.current!;
    Array.from(ul.children).forEach((page: any) => {
      page.classList.remove("active");
      ul.children[counter].classList.add("active");
    });
  }
  //  End Functions When [Wheel , Click] Choice On Aside

  useEffect(() => {
    let homeLi: any = refPageUl.current!;
    homeLi.children[0].classList.add("active");
  }, []);

  return (
    <aside className="" ref={props.transfare}>
      <ul className='pages' ref={refPageUl}>
        {pages.map(({ page, icon }, index) =>
          <li key={index} data-count={index} ref={refPageLi} onClick={(e) => AddRemoveClick(e)}>
            <i className={icon}></i>
            <label data-fill={page}>{page}</label>
            <span></span>
          </li>)}
      </ul>

    </aside>
  )
}

export default React.memo(Aside)
