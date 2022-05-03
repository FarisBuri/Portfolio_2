import React from 'react'
import { useRef } from 'react';
import { useEffect } from 'react'
import Introduce from './Introduce'
import Skills from './Skills';

function ParentSection({ getElement, count }: any) {
  console.log(count());
  let arr = [<Introduce />, <Skills />];
  let refSection = useRef(null);
  useEffect(() => {
    let section: any = refSection.current!;
    section.style.height = getElement.current.style.height;
    section.style.width = (window.innerWidth - 231) + "px";
  });
  console.log("Parent", count());
  return (
    <section className='flex-grow-1' ref={refSection} style={{ position: "relative", overflow: "hidden", padding: "15px" }} >
      {arr[count()]}
      <svg className={"svg"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#2eca7f" fillOpacity="1" d="M0,288L48,277.3C96,267,192,245,288,240C384,235,480,245,576,218.7C672,192,768,128,864,122.7C960,117,1056,171,1152,160C1248,149,1344,75,1392,37.3L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
    </section>
  )
}

export default ParentSection
