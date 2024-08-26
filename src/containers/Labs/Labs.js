import React from 'react';
import MiniHero from '../../components/MiniHero/MiniHero';
import Footer from '../../components/Footer/Footer';

const Labs = () => {
    return (
        <main>
            <MiniHero />

            <div className="section__content cf">
                <h2>Labs</h2>
                <p>Sometimes I like to try out some new idea or build some nice theme I stumbled across online. This is where things like that live. They may or may not be finished. They may or may not work completely. Browse at your own risk!</p>
                <ul className="indent">
                    <li><a href="labs/image-editor/index.html"><strong>CSS Image Editor!</strong></a>
                        <p>Using AngularJS to make the page dynamic, I threw together a simple tool for playing with the different CSS Image filters we have available to us so you can see what each does and how they interact with each other.</p>
                    </li>
                    <li><a href="labs/workout-plan"><strong>Workout Planner</strong></a>
                        <p>Made with AngularJS. I created this little web app to help me plan and track my workouts. It uses device Local Storage to remember my progress throughout each week.</p>
                    </li>
                    <li><a href="http://codepen.io/justincoleman/full/rexKPX/" target="_blank" rel="noopener noreferrer"><strong>CSS Flags</strong></a>
                        <p>A random selection of country flags recreated with only CSS with only one HTML element per flag.</p>
                    </li>
                    <li><a href="http://codepen.io/justincoleman/full/RaoRJG/" target="_blank" rel="noopener noreferrer"><strong>10 Cloverfield Lane logo animation</strong></a>
                        <p>I recently saw the movie 10 Cloverfield Lane and not only fell in love with the movie, but also the subtle animation they used with their logo. I came home that night and tried to roughly throw something together to mimic the neat effect.</p>
                    </li>
                    <li><a href="labs/loading.html"><strong>CSS-only Loading Spinners</strong></a>
                        <p>Attempted to recreate a few spinner GIFs I had seen using only CSS. Mostly successful</p>
                    </li>
                    <li><a href="labs/Perth/index.html"><strong>PSD to HTML 1</strong></a>
                        <p>Converted a nice theme I found online to actual HTML + SASS. Fully responsive.</p>
                    </li>
                </ul>
            </div>

            <Footer />
        </main>
    );
}

export default Labs;
