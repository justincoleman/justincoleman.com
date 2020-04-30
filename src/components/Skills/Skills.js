import React from 'react';

const Skills = () => {
    return (
        <div id="skills" className="skills cf">
            <h2 className="skills__header">Skills</h2>
            <div>
                <p>Here is where I feel my skillset is, in ambigious chart form, for a few selected technologies that might interest you. As you can see, I feel strongest in (and favor) HTML, CSS, Sass and jQuery.</p>
                <ul>
                    <li>
                        <div className="skills__level"><span className="skills__bar skills__bar--html"></span>
                            <p className="skills__label">HTML</p>
                        </div>
                    </li>
                    <li>
                        <div className="skills__level"><span className="skills__bar skills__bar--css"></span>
                            <p className="skills__label">CSS</p>
                        </div>
                    </li>
                    <li>
                        <div className="skills__level"><span className="skills__bar skills__bar--jquery"></span>
                            <p className="skills__label">jQuery</p>
                        </div>
                    </li>
                    <li>
                        <div className="skills__level"><span className="skills__bar skills__bar--sass"></span>
                            <p className="skills__label">Sass/Scss</p>
                        </div>
                    </li>
                    <li>
                        <div className="skills__level"><span className="skills__bar skills__bar--bootstrap"></span>
                            <p className="skills__label">Bootstrap</p>
                        </div>
                    </li>

                    <li>
                        <div className="skills__level"><span className="skills__bar skills__bar--js"></span>
                            <p className="skills__label">JavaScript</p>
                        </div>
                    </li>    
                    <li>
                        <div className="skills__level"><span className="skills__bar skills__bar--gulp"></span>
                            <p className="skills__label">Gulp</p>
                        </div>
                    </li>
                    <li>
                        <div className="skills__level"><span className="skills__bar skills__bar--react"></span>
                            <p className="skills__label">React</p>
                        </div>
                    </li>
                    <li>
                        <div className="skills__level"><span className="skills__bar skills__bar--vue"></span>
                            <p className="skills__label">Vue.JS</p>
                        </div>
                    </li>   
                    <li>
                    <div className="skills__level"><span className="skills__bar skills__bar--git"></span>
                        <p className="skills__label">Git</p>
                    </div>
                    </li>
                    <li>
                        <div className="skills__level"><span className="skills__bar skills__bar--svn"></span>
                            <p className="skills__label">SVN</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Skills;