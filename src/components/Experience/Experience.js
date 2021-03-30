import React from 'react';

const Experience = () => {
    return (
        <div id="experience" className="experience">
            <h2 className="experience__header">Professonal Timeline</h2>
            <h3 className="experience__date">2020</h3>
            <ul className="experience__timeline cf">
                <li className="experience__job wow slideInRight">
                    <div className="experience__label">
                        <div className="experience__details">
                            <p className="experience__details--title"><strong>Senior Front-end Developer</strong></p>
                            <p className="experience__details--company">Cyren</p>
                            <p className="experience__details--dates">November 2016 - Current</p>
                        </div>
                        <div className="experience__description">
                            <p>In my role at Cyren I work as a part of the Digital Studio which is an internal group servicing multiple areas of the company. Our primary focus is building web-based marketing materials (websites, tools and emails) for the company. In my time at Cyren I have led numerous initiatives to rebuild the corporate website, refactor codebases and increase overall demand generation for the company. </p>
                        </div>
                    </div>
                </li>
                <li className="experience__job wow slideInLeft">
                    <div className="experience__label">
                        <div className="experience__details">
                            <p className="experience__details--title"><strong>UX Developer</strong></p>
                            <p className="experience__details--company">Caringo</p>
                            <p className="experience__details--dates">April 2012 - October 2016</p>
                        </div>
                        <div className="experience__description">
                            <p>In my role at Caringo I was primarily responsible for bridging the gap between the design and development sides of the UI team. I was also tasked with nearly all CSS styling across multiple projects.</p>
                        </div>
                    </div>
                </li>
                <li className="experience__job wow slideInRight">
                    <div className="experience__label">
                        <div className="experience__details">
                            <p className="experience__details--title"><strong> Front-end Developer</strong></p>
                            <p className="experience__details--company">BuildASign</p>
                            <p className="experience__details--dates">Feb. 2012 - April 2012</p>
                        </div>
                        <div className="experience__description">
                            <p>In February of 2012 I was promoted at BuildASign and tasked with more responsibilities including leading the front-end build out of new features for existing sites, leading the front-end development of new properties and continued to work on most of the companies critical HTML emails, among other tasks.</p>
                        </div>
                    </div>
                </li>
                <li className="experience__job wow slideInLeft">
                    <div className="experience__label">
                        <div className="experience__details">
                            <p className="experience__details--title"><strong>Jr. Front-end Developer</strong></p>
                            <p className="experience__details--company">BuildASign</p>
                            <p className="experience__details--dates">Mar. 2011 - Feb. 2012</p>
                        </div>
                        <div className="experience__description">
                            <p>At BuildASign I worked as a junior developer handling almost all of the companies HTML email campaigns, fixing bugs on the companies various websites and assisting with building new sites.</p>
                        </div>
                    </div>
                </li>
                <li className="experience__job wow slideInRight">
                    <div className="experience__label">
                    <div className="experience__details">
                        <p className="experience__details--title"><strong>Web Production Specialist</strong></p>
                        <p className="experience__details--company">TASB</p>
                        <p className="experience__details--dates">Aug. 2010 - Feb. 2011</p>
                    </div>
                    <div className="experience__description">
                        <p>In my role at the Texas Association of School Boards I was tasked with numerous jobs including, but not limited to: e-mail newsletter development, 3rd party e-commerce site integration, web application development, and best-practices research.</p>
                    </div>
                    </div>
                </li>
                <li className="experience__job wow slideInLeft">
                    <div className="experience__label">
                        <div className="experience__details">
                            <p className="experience__details--title"><strong>Front-end Developer</strong></p>
                            <p className="experience__details--company">Freelance</p>
                            <p className="experience__details--dates">May 2010 - Dec. 2010</p>
                        </div>
                        <div className="experience__description">
                            <p>After college I used my newfound skillset to work with a handful of local (Austin, TX) web design/development agencies in helping them build out sites for clients.</p>
                        </div>
                    </div>
                </li>
                <li className="experience__dateline"></li>
            </ul>
            <h3 className="experience__date">2010</h3>
        </div>
    );
}

export default Experience;