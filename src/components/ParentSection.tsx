import React from 'react'
import { useRef } from 'react';
import { useEffect } from 'react'
import Introduce from './Introduce'
import Services from './Services';
import Skills from './Skills';

function ParentSection({ getElement, count }: any) {
  // Start Declare Variables

  let textHome = "Hello I Am Eliot Evergarden working as full stack developer based on Saudi Arabia in jeddah, i have amazing experiance at devolpment & website creation",
    textResume = `
    - links to contact me.
    - explain the eager of learning. 
    - experience as freelancer & graduate project. 
    - programming skills.
    i hope this resume Get your satisfaction. and thank you`
  let arr = [
    <Introduce img={"introduce.png"} title={"Who Am I"} face={"laughing.png"} text={textHome} social={true} tab="Introduce" />,
    <Skills />,
    <Introduce img={"type.png"} title={"Resume Contains"} face={"smiling.png"} text={textResume} social={false} tab="Resume" />,
    <Services />
  ];
  let refSection = useRef(null);

  // Start Declare Variables
  useEffect(() => {
    let section: any = refSection.current!;
    section.style.height = getElement.current.style.height;
    section.style.width = (window.innerWidth - 231) + "px";
  });
  // console.log("Parent", count());
  return (
    <section className='flex-grow-1' ref={refSection} style={{ position: "relative", overflow: "hidden", padding: "15px" }} >
      {arr[count()]}
      <svg className={"svg"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#2eca7f" fillOpacity="1" d="M0,288L48,277.3C96,267,192,245,288,240C384,235,480,245,576,218.7C672,192,768,128,864,122.7C960,117,1056,171,1152,160C1248,149,1344,75,1392,37.3L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
    </section>
  )
}

export default ParentSection
