import React from 'react';
import MiniHero from '../../components/MiniHero/MiniHero';

const About = () => {
    return (
        <main>
            <MiniHero />

            <div id="about" className="about about--more cf">
                <h2>About Me</h2>
                <p>Currently I live and work in beautiful Austin, Texas at Cyren, a cloud-based cybersecurity company. At Cyren I am a part of the relatively new Digital Studio. As the senior front-end developer on the team I am responsible for most development tasks on the marketing websites and emails. I also create a lot of the structural infrastructure the team uses. I have refined processes and implemened tools and methods which help us work faster and more seamlessly.</p>
                <p>Outside of work I like to spend my free time working with friends on exploring new opportunities to see what we can build and put out into the world. So far these experiments have led to things like <a href="http://www.justincoleman.com/thoughtdrop/" target="_blank" rel="noopener noreferrer">Thought Drop</a>, <a href="http://lankyliving.com" target="_blank" rel="noopener noreferrer">Lanky Living</a> and <a href="http://quoteroper.com" target="_blank" rel="noopener noreferrer">Quote Roper</a>. It's a great way to scratch my entrepreneurial itch while also continuing to level up my front-end abilities.</p>
                <p>In addition to work and my entrepreneurial activities I enjoy a variety of other things including travelling with my wonderful girlfriend, spending way too much time at the movies, watching sports (Go Dodgers/Eagles/Lakers/Longhorns!) and taking my dogs on long walks. </p>
                <h2>About My Tools</h2>
                <h4>Hardware</h4>
                <p>I work exclusively on a Late-2016 Macbook Pro with 16GB of RAM and a 250GB SSD. It's a good machine that has served me well (the keyboard is the bane of my existence though). When I am at home I work at my sit/stand desk from <a href="https://www.autonomous.ai/desk" target="_blank" rel="noopener noreferrer">Autonomous</a>. If I am sitting I use a <a href="http://www.hermanmiller.com/products/seating/performance-work-chairs/embody-chairs.html" target="_blank" rel="noopener noreferrer">Herman Miller Embody</a> chair. When docked, my machine is connected to a work supplied 24-inch monitor from Acer, a <a href="http://www.amazon.com/dp/B00CYX26BC/" target="_blank" rel="noopener noreferrer">Microsoft Sculpt ergonomic keyboard</a> and a <a href="http://www.amazon.com/Logitech-Master-Wireless-Mouse-910-004337/dp/B00TZR3WRM/" target="_blank" rel="noopener noreferrer">Logitech MX Master</a> mouse.</p>
                <h4>Development</h4>
                <p>I use <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">VS Code</a> for my editor (with the wonderful <a href="https://www.typography.com/fonts/operator/styles" target="_blank" rel="noopener noreferrer">Operator Mono</a> and <a href="https://monokai.pro/" target="_blank" rel="noopener noreferrer">Monokai Pro theme</a>), <a href="https://www.iterm2.com/" target="_blank" rel="noopener noreferrer">iTerm 2</a> and <a href="https://panic.com/transmit/" target="_blank" rel="noopener noreferrer">Transmit</a> (for FTP and S3). I also tend to keep <a href="http://xscopeapp.com/" target="_blank" rel="noopener noreferrer">xScope</a> open to make sure things are lined up just perfectly.</p>
                <p>For documentation of any variety I have found <a href="https://kapeli.com/dash" target="_blank" rel="noopener noreferrer">Dash</a> indispensable. The ability to store all of the docs you use most frequently locally on your machine is great.</p>
                <h4>Design</h4>
                <p>Any time I need to design something I jump straight into <a href="https://www.sketchapp.com/" target="_blank" rel="noopener noreferrer">Sketch</a> which is, in my opinion, the best tool out right now for creating for mobile and the web. And if you are using Sketch then you also need to install <a href="http://sketchtoolbox.com/" target="_blank" rel="noopener noreferrer">Sketch Toolbox</a> ASAP.</p>
                <p>When I need to create a wireframe for something I use <a href="https://balsamiq.com/" target="_blank" rel="noopener noreferrer">Balsamiq</a> which seems like a pretty standard choice at the moment. For anything color related I rely on <a href="http://www.colourlovers.com/" target="_blank" rel="noopener noreferrer">ColourLovers</a> and the Mac app <a href="https://couleursapp.com/" target="_blank" rel="noopener noreferrer">Couleurs</a>.</p>
                <h4>Other Stuff</h4>
                <p>These are other tools/services/apps I use most frequently on my machines, either for work or for fun: <a href="http://github.com" target="_blank" rel="noopener noreferrer">Github</a> (for fun), <a href="http://bitbucket.org" target="_blank" rel="noopener noreferrer">BitBucket</a> (for work), <a href="http://tapbots.com/tweetbot/" target="_blank" rel="noopener noreferrer">Tweetbot</a>, <a href="http://slack.com" target="_blank" rel="noopener noreferrer">Slack</a>, <a href="https://www.sparklabs.com/viscosity/" target="_blank" rel="noopener noreferrer">Viscosity</a> (for VPNing) and <a href="https://justgetflux.com/" target="_blank" rel="noopener noreferrer">Flux</a> (to keep my eyes going).</p>
                <h4>About This Website</h4>
                <p>The HTML for this site was initially written in <a href="http://jade-lang.com/" target="_blank" rel="noopener noreferrer">Jade</a>. The CSS started out as <a href="http://sass-lang.com/" target="_blank" rel="noopener noreferrer">Sass</a> (SCSS to be specific). Both of those plus the JavaScript were compiled and compressed using my <a href="http://gulpjs.com/" target="_blank" rel="noopener noreferrer">Gulp</a> build script. That same script also optimizes any images used on the site. You can find my <a href="https://github.com/justincoleman/justincoleman.com/blob/master/gulpfile.js" target="_blank" rel="noopener noreferrer">Gulpfile</a> on Github. Feel free to use it and modify it suit your needs.</p>
                <p>I followed the <a href="https://en.bem.info/" target="_blank" rel="noopener noreferrer">BEM</a> methodology when writing my HTML and CSS in order to try and keep things modular and understandable going forward. If you look through my source code you will see lots of classes and lots of hyphens and underscores, a telltale sign of BEM. An example would be:</p>
                <code className="code__block">
                    &lt;p&gt;
                        <br />
                        &nbsp; &lt;a href="about.html" class="btn btn--primary btn--large"&gt;Read more!&lt;/a&gt;
                        <br />
                    &lt;/p&gt;
                </code>
                <p>The only code I didn't write myself for this website was provided by the following wonderful people:</p>
                <ul className="indent">
                    <li><a href="https://jquery.com/" target="_blank" rel="noopener noreferrer">jQuery</a></li>
                    <li><a href="http://mynameismatthieu.com/WOW/" target="_blank" rel="noopener noreferrer">WOW.JS</a></li>
                </ul>
                <p>The fonts used here are Open Sans via Google Fonts and Future. My domain was purchased using <a href="http://namecheap.com" target="_blank" rel="noopener noreferrer">NameCheap.com</a> whom I highly recommend and it is hosted on <a href="https://mediatemple.net/" target="_blank" rel="noopener noreferrer">MediaTemple</a>.</p>
            </div>
        </main>
    );
}

export default About;