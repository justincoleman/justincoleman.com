import React from 'react';
import Anomali from '../../assets/images/portfolio/anomali.png';
import Cyren from '../../assets/images/portfolio/cyren.png';
import Caringo from '../../assets/images/portfolio/caringo.png';
import BuildASign from '../../assets/images/portfolio/bas.png';
// import LL from '../../assets/images/portfolio/ll.png';
// import QR from '../../assets/images/portfolio/qr.png';

const Portfolio = () => {
    return (
        <div id="portfolio" className="portfolio grid-wrapper">
            <div className="box zone">
                <a href="https://anomali.com" target="_blank" rel="noopener noreferrer" className="overlay">&nbsp;</a>
                <img src={Anomali} alt="" />
                <div className="projectAbout">
                    <h6>Anomali</h6>
                    <p>Brought on as contractor, I helped Anomali build out a new corporate website. The project included refining the HTML, CSS and Javascript into a system that is highly flexible with reusable modules that enable fast development of pages. I also built a handful of JavaScript modules including a sorting and filtering stylized list module.</p>
                    <button className="btn btn--secondary" href="https://anomali.com" rel="noopener noreferrer" target="_blank">Learn More</button>
                </div>
            </div>
            <div className="box zone">
                <a href="https://cyren.com" target="_blank" rel="noopener noreferrer" className="overlay">&nbsp;</a>
                <img src={Cyren} alt="" />
                <div className="projectAbout">
                    <h6>Cyren</h6>
                    <p>At Cyren I am resposnible for the corporate website. I have overseen three complete redesigns and have implemented a new build system and code framework that has allowed us to deliver each one on time while also improving accessibility, page load times and general page performance. I've also worked on various marketing based applications, email newsletters and Marketo implementations.</p>
                    <button className="btn btn--secondary" href="https://cyren.com" rel="noopener noreferrer" target="_blank">Learn More</button>
                </div>
            </div>
            <div className="box zone">
                <img src={Caringo} alt="Caringo" />
                <a href="https://caringo.com" target="_blank" rel="noopener noreferrer" className="overlay">&nbsp;</a>
                <div className="projectAbout">
                    <h6>Caringo</h6>
                    <p>With Caringo I acted in a front-end designer / UX developer role. I bridged the gap between the design team and the development team helping ensure that mockups and plans for two applications were realistic and achievable given our development timeframe. I was also resposnible with building out reusable front-end modules that the development team could plug in as needed to quickly build out application interfaces.</p>
                    <button className="btn btn--secondary" href="https://caringo.com" rel="noopener noreferrer" target="_blank">Learn More</button>
                </div>
            </div>
            <div className="box zone">
                <img src={BuildASign} alt="" />
                <a href="https://buildasign.com" target="_blank" rel="noopener noreferrer" className="overlay">&nbsp;</a>
                <div className="projectAbout">
                    <h6>BuildASign.com</h6>
                    <p>I was on the design team with BuildASign working with a team of designers and developers working on projects such as refining the core BuildASign e-commerce website, building new products and building out marketing emails. I was a part of the team that launched new products such as EasyCanvasPrints.com.</p>
                    <button className="btn btn--secondary" href="https://buildasign.com" rel="noopener noreferrer" target="_blank">Learn More</button>
                </div>
            </div>
            {/* <div className="box zone">
                <img src={LL} alt="" />
                <a href="https://lankyliving.com" target="_blank" rel="noopener noreferrer" className="overlay">&nbsp;</a>
                <div className="projectAbout">
                    <h6>LankyLiving</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias mollitia totam, fuga voluptate, ab quo id provident veritatis repudiandae ipsam veniam at iure nihil illum rem aperiam, enim assumenda quia.</p>
                    <button className="btn btn--secondary" href="https://lankyliving.com" rel="noopener noreferrer" target="_blank">Learn More</button>
                </div>
            </div> */}
            {/* <div className="box zone">
                <img src="http://placehold.it/680x360" alt="" />
                <a href="#" target="_blank" rel="noopener noreferrer" className="overlay">&nbsp;</a>
                <div className="projectAbout">
                    <h6>Face Detection Brain</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias mollitia totam, fuga voluptate, ab quo id provident veritatis repudiandae ipsam veniam at iure nihil illum rem aperiam, enim assumenda quia.</p>
                    <button className="btn btn--secondary" href="#" rel="noopener noreferrer" target="_blank">Learn More</button>
                </div>
            </div> */}
            {/* <div className="box zone">
                <img src={QR} alt="" />
                <div className="projectAbout">
                    <h6>Quote Roper</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias mollitia totam, fuga voluptate, ab quo id provident veritatis repudiandae ipsam veniam at iure nihil illum rem aperiam, enim assumenda quia.</p>
                    <button class="btn btn--secondary">Learn More</button>
                </div>
            </div> */}
        </div>
    );
}

export default Portfolio;