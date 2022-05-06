import React from 'react'
import { useEffect } from 'react';

function Services() {
    useEffect(() => {
        document.title = "Services";
    })
    let services = [
        { title: "Quick", desc: "We Care About Your Time Also We Work 24/7 So Don't Warry Your work Will Be Done Quicker With Quality", img: "quick.png" },
        { title: "Quality", desc: "We Are reliable with experience as freelancer. And best practice we care about add new feature", img: "quality.png" },
        { title: "Design", desc: "We Have seen a lot of websites And Made A lot Of Websites we care about trend of modern design", img: "design.png" }
    ]
    return (
        <div className='services'>
            {services.map(({ title, desc, img }: any, index) => {
                return (
                    <div className="box" key={index}>
                        <div className="overlay"></div>
                        <div className="circle">
                            <h3>{title}</h3>
                        </div>
                        <p>{desc}</p>
                        <div className="image">
                            <img src={`../images/imgServcies/${img}`} alt="" />
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

export default Services
