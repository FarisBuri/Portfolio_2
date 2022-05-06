import React from 'react'
import { useEffect } from 'react';

function Skills() {
    useEffect(() => {
        document.title = "Skills"
    })
    let skills = [
        { skill: "HTML 5", img: "html-5.png" },
        { skill: "PugJS", img: "pug.png" },
        { skill: "CSS 3", img: "css-3.png" },
        { skill: "SCSS", img: "sass.png" },
        { skill: "Bootstrap", img: "bootstrap.png" },
        { skill: "JS ES6", img: "javascript.png" },
        { skill: "Jest", img: "jest.png" },
        { skill: "React", img: "react.png" },
        { skill: "TypeScript", img: "typescript.png" },
        { skill: "C Sharp", img: "c-sharp.png" },
        { skill: "ASP.NET", img: "asp.png" },
        { skill: "SQL MS", img: "server.png" }];
    return (
        <div className='skills d-flex flex-wrap justify-content-center'>
            {skills.map(({ skill, img }: any, index) => {
                return (
                    <div className='box' key={index}>
                        <div className='image'>
                            <img src={`../images/skills/${img}`} alt="" />
                        </div>
                        <h4>{skill}</h4>
                    </div>
                )
            })}

        </div>
    )
}

export default Skills
