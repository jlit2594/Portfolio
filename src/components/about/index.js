import React from 'react';
import Selfie from '../selfie';

import resume from '../../downloads/Resume 2022.pdf'


function About() {

    return (
        <section className='first-section' id='about'>
            <Selfie />
            <div className='about'>
                <div className='bio'>
                    <h3>Hi!</h3>
                    <p className='desc'>
                        My name is James Litton and this is my portfolio! After earning my Bachelor's in Political Science from the University of Houston, I decided to make a change. I signed up for the Full Stack Development Boot Camp at the University of Texas, and now we're up to date.
                    </p>
                    <br/>
                    <p>
                        Click the links above to check out some of the work I've done, and click on the icons under my picture to see my social media profiles!
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About;