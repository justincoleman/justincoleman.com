import React from 'react';

const AboutMe = ({onRouteChange}) => {
    return (
        <div id="about" className="about cf">
            <div className="about__text-cntr">
                <h2 className="about__title reversed">Howdy!</h2>
                <p className="about__text">As you may, or may not, have gathered my name is Justin Coleman. I'm a front-end developer based out of Philadelphia, Pennsylvania.</p>
                <p className="about__text">My passion is in bridging the gap between designers and developers. My grasp of design methodologies, coupled with my experience writing front-end code lets me understand both sides and bring the two closer together creating a smoother workflow.</p>
                <p className="about__text">I thoroughly enjoy building mobile-first, responsive websites and applications. I have applied my skills in numerous fields including e-commerce, non-profit, big data, cybersecurity and agency work.</p>
                {/* <p><button 
                    onClick={() => onRouteChange('about')} 
                    title="About" 
                    className="btn btn--primary btn--large">Read more!</button></p> */}
            </div>
        </div>
    );
}

export default AboutMe;