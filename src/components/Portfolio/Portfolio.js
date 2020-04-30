import React from 'react';
import Cyren from '../../assets/images/portfolio/cyren.png';
import Caringo from '../../assets/images/portfolio/caringo.png';
import BuildASign from '../../assets/images/portfolio/bas.png';
import LL from '../../assets/images/portfolio/ll.png';
import QR from '../../assets/images/portfolio/qr.png';

const Portfolio = () => {
    return (
        <div id="portfolio" className="portfolio grid-wrapper">
            <div className="box zone">
                <img src={Cyren} alt="" />
                <div className="projectAbout">
                    <h6>Cyren</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias mollitia totam, fuga voluptate, ab quo id provident veritatis repudiandae ipsam veniam at iure nihil illum rem aperiam, enim assumenda quia.</p>
                    <button class="btn btn--secondary">Learn More</button>
                </div>
            </div>
            <div className="box zone">
                <img src={Caringo} alt="Caringo" />
                <div className="projectAbout">
                    <h6>Caringo</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias mollitia totam, fuga voluptate, ab quo id provident veritatis repudiandae ipsam veniam at iure nihil illum rem aperiam, enim assumenda quia.</p>
                    <button class="btn btn--secondary">Learn More</button>
                </div>
            </div>
            <div className="box zone">
                <img src={BuildASign} alt="" />
                <div className="projectAbout">
                    <h6>BuildASign.com</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias mollitia totam, fuga voluptate, ab quo id provident veritatis repudiandae ipsam veniam at iure nihil illum rem aperiam, enim assumenda quia.</p>
                    <button class="btn btn--secondary">Learn More</button>
                </div>
            </div>
            <div className="box zone">
                <img src={LL} alt="" />
                <div className="projectAbout">
                    <h6>LankyLiving</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias mollitia totam, fuga voluptate, ab quo id provident veritatis repudiandae ipsam veniam at iure nihil illum rem aperiam, enim assumenda quia.</p>
                    <button class="btn btn--secondary">Learn More</button>
                </div>
            </div>
            <div className="box zone">
                <img src="http://placehold.it/680x360" alt="" />
                <div className="projectAbout">
                    <h6>Face Detection Brain</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias mollitia totam, fuga voluptate, ab quo id provident veritatis repudiandae ipsam veniam at iure nihil illum rem aperiam, enim assumenda quia.</p>
                    <button class="btn btn--secondary">Learn More</button>
                </div>
            </div>
            {/* <div className="box zone">
                <img src={QR} alt="" />
                <div className="projectAbout">
                    <h6>Quote Roper</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias mollitia totam, fuga voluptate, ab quo id provident veritatis repudiandae ipsam veniam at iure nihil illum rem aperiam, enim assumenda quia.</p>
                    <button class="btn btn--secondary">Learn More</button>
                </div>
            </div> */}
        </div>

        /* <div id="portfolio" className="portfolio cf">
                <ul>
                    <li className="portfolio__item">
                        <a href="https://cyren.com" target="_blank" className="hide--md"></a>
                        <div className="portfolio__description">
                            <a href="https://cyren.com" target="_blank" className="portfolio__description--btn btn btn--medium btn--secondary">View Project</a>
                        </div>
                        <img src="../../assets/img/portfolio/cyren.png" className="portfolio__image" />
                        <span className="portfolio__overlay">
                            <p className="portfolio__overlay--text">HTML5 / CSS3 / JavaScript / Responsive / jQuery</p>
                        </span>
                    </li>
                    <li className="portfolio__item">
                        <a href="http://lankyliving.com" target="_blank" rel="noopener noreferrer" className="hide--md">&nbsp;</a>
                        <div className="portfolio__description">
                            <a href="http://lankyliving.com" target="_blank" rel="noopener noreferrer" className="portfolio__description--btn btn btn--medium btn--secondary">View Project</a>
                        </div>
                        <img src="../../assets/images/portfolio/ll.png" alt="" className="portfolio__image" />
                        <span className="portfolio__overlay" >
                            <p className="portfolio__overlay--text">HTML5 / CSS3 / Wordpress / Responsive / jQuery</p>
                        </span>
                    </li>
                    <li className="portfolio__item">
                        <a href="http://quoteroper.com" target="_blank" rel="noopener noreferrer" className="hide--md">&nbsp;</a>
                        <div className="portfolio__description">
                            <a href="http://quoteroper.com" target="_blank" rel="noopener noreferrer" className="portfolio__description--btn btn btn--medium btn--secondary">View Project</a>
                        </div>
                        <img src="../../assets/images/portfolio/qr.png" alt="" className="portfolio__image" />
                        <span className="portfolio__overlay">
                            <p className="portfolio__overlay--text">HTML5 / CSS3 / Responsive</p>
                        </span>
                    </li>
                    <li className="portfolio__item"><a href="http://caringo.com" target="_blank" className="hide--md"></a>
                    <div className="portfolio__description"><a href="http://caringo.com" target="_blank" className="portfolio__description--btn btn btn--medium btn--secondary">View Project</a></div><img src="assets/img/portfolio/caringo.png" className="portfolio__image"><span className="portfolio__overlay">
                    <p className="portfolio__overlay--text">HTML5 / CSS3 / jQuery / Responsive</p></span>
                    </li>
                    <li className="portfolio__item"><a href="/thoughtdrop" target="_blank" className="hide--md"></a>
                    <div className="portfolio__description"><a href="/thoughtdrop" target="_blank" className="portfolio__description--btn btn btn--medium btn--secondary">View Project</a></div><img src="assets/img/portfolio/td.png" className="portfolio__image"><span className="portfolio__overlay">
                    <p className="portfolio__overlay--text">HTML5 / CSS3 / jQuery / Responsive</p></span>
                    </li>
                    <li className="portfolio__item">
                    <div className="portfolio__description">
                    </div><img src="assets/img/portfolio/pkp.png" className="portfolio__image"><span className="portfolio__overlay">
                    <p className="portfolio__overlay--text">HTML5 / CSS3 / jQuery / PHP</p></span>
                    </li>
                    <li className="portfolio__item"><a href="labs/loading.html" target="_blank" className="hide--md"></a>
                    <div className="portfolio__description"><a href="labs/loading.html" target="_blank" className="portfolio__description--btn btn btn--medium btn--secondary">View Project</a></div><img src="assets/img/portfolio/css-spinners.png" className="portfolio__image"><span className="portfolio__overlay">
                    <p className="portfolio__overlay--text">CSS3 / Responsive</p></span>
                    </li>
                    <li className="portfolio__item"><a href="http://stayawakedesign.com/clients/1/" target="_blank" className="hide--md"></a>
                    <div className="portfolio__description"><a href="http://stayawakedesign.com/clients/1/" target="_blank" className="portfolio__description--btn btn btn--medium btn--secondary">View Project</a></div><img src="assets/img/portfolio/tge.png" className="portfolio__image"><span className="portfolio__overlay">
                    <p className="portfolio__overlay--text">HTML5 / CSS3 / JavaScript</p></span>
                    </li>
                    <li className="portfolio__item"><a href="http://stayawakedesign.com" target="_blank" className="hide--md"></a>
                    <div className="portfolio__description"><a href="http://stayawakedesign.com" target="_blank" className="portfolio__description--btn btn btn--medium btn--secondary">View Project</a></div><img src="assets/img/portfolio/sad.png" className="portfolio__image"><span className="portfolio__overlay">
                    <p className="portfolio__overlay--text">HTML5 / CSS3 / jQuery</p></span>
                    </li>
                </ul>
            </div> */
    );
}

export default Portfolio;