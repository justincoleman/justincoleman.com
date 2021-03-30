import React from 'react';
import GithubLogo from '../../assets/svg/logo_github.svg';
import TwitterLogo from '../../assets/svg/logo_twitter.svg';
import LinkedInLogo from '../../assets/svg/logo_linkedin.svg';

const Footer = () => {
    return (
        <footer id="footer" className="footer cf">
            <div className="footer__about">
                <div className="footer__tagline">
                    <h4>Justin Coleman. <br /> Front-end Designer. <br /> Movie/Car/<span className="hookem">Sports Lover</span>.</h4>
                </div>
                <div className="footer__contact-info">
                    <p className="footer__contact-info--phone">469-607-1586</p>
                    <p className="footer__contact-info--email">Hello@JustinColeman.com</p>
                </div>
                </div>
                <div className="footer__social">
                <ul>
                    <li className="footer__social-item"><a href="https://github.com/justincoleman/" target="_blank" rel="noopener noreferrer"><img src={GithubLogo} title="View my code on Github" alt="Github logo" className="footer__social-image" /></a></li>
                    <li className="footer__social-item"><a href="https://twitter.com/jcoleman" target="_blank" rel="noopener noreferrer"><img src={TwitterLogo} title="Follow me on Twitter" alt="Twitter logo" className="footer__social-image" /></a></li>
                    <li className="footer__social-item"><a href="https://www.linkedin.com/in/colemanjustin" target="_blank" rel="noopener noreferrer"><img src={LinkedInLogo} title="See my resume on LinkedIn" alt="LinkedIn logo" className="footer__social-image" /></a></li>
                </ul>
                </div>
                <div className="fin cf">
                <p>Made with <span className="heart"></span> in Philly</p>
            </div>
        </footer>
    );
}

export default Footer;