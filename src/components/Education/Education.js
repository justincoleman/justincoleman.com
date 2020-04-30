import React from 'react';

const Education = () => {
    return (
        <div id="education" className="education">
            <h2 className="education__header">Education</h2>
            <h4><strong>The University of Texas at Arlington</strong></h4>
            <ul className="education__facts">
                <li className="education__item"><strong>Years</strong>: 2006 - 2010</li>
                <li className="education__item"><strong>Major</strong>: Communication Technology</li>
                <li className="education__item"><strong>GPA</strong>: 3.8 (overall) | 4.0 (major)</li>
                <li className="education__item"><strong>Honors</strong>:
                    <ul>
                    <li>Summa Cum Laude</li>
                    <li>Phi Kappa Phi Honor Society</li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}

export default Education;