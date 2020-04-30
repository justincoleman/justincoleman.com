import React from 'react';

const AboutMe = () => {
    return (
        <div id="about" className="about cf">
            <div className="about__text-cntr">
                <h2 className="about__title reversed">Howdy!</h2>
                <p className="about__text">As you may, or may not, have gathered my name is Justin Coleman. I'm a front-end developer based out of Austin, Texas.</p>
                <p className="about__text">My passion is in bridging the gap between designers and developers. My grasp of design methodologies, coupled with my experience writing front-end code lets me understand both sides and bring the two closer together creating a smoother workflow.</p>
                <p className="about__text">I thoroughly enjoy building mobile-first, responsive websites and applications. I have applied my skills in numerous fields including e-commerce, non-profit, big data, cybersecurity and agency work.</p>
                <p><a href="about.html" className="btn btn--primary btn--large">Read more!</a></p>
            </div>
        </div>
    );
}

export default AboutMe;