import React from 'react'

function Projects() {
    let websites = [
        { website: "http://faris.meshari-ipa.com", title: "IPA Coffee", img: "IPA-Coffee.WebP", job: "Front End", skills: ["HTML", "CSS", "JS"], privilege: "Back End", advantage: ["C#", "ASP.NET", "SQL"] },

        {
            website: "../OldPortfolio/index.html", title: "Old Portfolio", img: "portfolioSm.png", job: "Front End", skills: ["HTML", "CSS", "JS"], privilege: "Advantage", advantage: [
                "Use Objects",
                "Use Storage, DOM & BOM",
                "Light House More Than 80",
            ],
        },
        {
            website: "https:/farisburi.com", title: "Portfolio", img: "portfolio.png", job: "Front End", skills: ["SCSS", "Bootstrap"], privilege: "Library", advantage: [
                "React",
                "TypeScript",

            ],
        },

        { website: "https://farisburi.github.io/Template-JS-With-Mentor", title: "Template JS", img: "Template JS.WebP", job: "Front End", skills: ["HTML", "CSS", "JS"], privilege: "Library", advantage: ["Font Awesome", "Normlize", "Images From Unsplash"] },

        { website: "https://farisburi.github.io/Template3-With-Mentor/", title: "Template 3", img: "/Template 3.WebP", job: "Front End", skills: ["HTML", "CSS"], privilege: "Library", advantage: ["Font Awesome", "Normlize"] },

        { website: "https://farisburi.github.io/Template2-With-Mentor/", title: "Template 2", img: "/Template 2.WebP", job: "Front End", skills: ["HTML", "CSS"], privilege: "Library", advantage: ["Font Awesome", "Normlize"] },

        { website: "https://farisburi.github.io/Template1-With-Mentor/", title: "Template 1", img: "/Template 1.WebP", job: "Front End", skills: ["HTML", "CSS"], privilege: "Library", advantage: ["Font Awesome", "Normlize"] },

        { website: "../Design SCSS/index.html", title: "Design SCSS", img: "Design_SCSS.WebP", job: "Front End", skills: ["HTML", "SCSS"], privilege: "Library", advantage: ["Font Awesome", "Normlize"] },

        { website: "../Design_Boostrap/index.html", title: "Bootstrap", img: "Bootstrap.png", job: "Front End", skills: ["HTML", "CSS"], privilege: "Library", advantage: ["Font Awesome", "Bootstrap"] },


    ];
    return (
        <div className="projects">
            {websites.map(({ website, title, img, job, skills, privilege, advantage }: any, index) => {
                return (
                    <div className="box" style={{ backgroundImage: 'url("../images/imgProjects/' + img + '")' }} key={index} data-project={title} onClick={() => window.open(website, "_blank")}>
                        <div className="front-end">
                            <ul>
                                <strong>{job} :</strong>
                                {skills.map((skill: any, index: any) => {
                                    return (
                                        <li key={index}>{skill}</li>
                                    );
                                })}
                            </ul>
                            <ul>
                                <strong>{privilege} :</strong>
                                {advantage.map((e: any, index: any) => {
                                    return (<li key={index}>{e}</li>)
                                })}

                            </ul>
                        </div>
                    </div>
                )
            })
            }
        </div>
    )
}

export default Projects

