import React from 'react';
import selfie from '../../img/headshot.png'
import resume from '../../downloads/Resume 2022.pdf'
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function About() {

    return (
        <section className='first-section' id='about'>
            <div className='about'>
                <div className="pic-link">
                    <img className='selfie' alt='This is my headshot.' src={selfie} />
                    <div className='middle'>
                        <div className='links'>
                            <a className='icon' href='https://www.linkedin.com/in/james-litton-3480b1179/'><FaLinkedin color='white' fontSize='2.5rem' /></a>
                            <a className='icon' href='https://github.com/jlit2594'><FaGithub color='white' fontSize='2.5rem'/></a>
                            <a className='icon' href='mailto://jdlitton2594@gmail.com'><FaEnvelope color='white' fontSize='2.5rem'/></a>
                        </div>
                    </div>
                </div>

                <div className='bio'>
                    <span className='greeting'>Hello!</span>
                    <p className='desc'>
                        My name is James Litton and this is my portfolio! After earning my Bachelor's in Political Science from the University of Houston, I decided to make a change. I signed up for the Full Stack Development Boot Camp at the University of Texas, and now we're up to date.
                    </p>
                    <br/>
                    <p className='desc'>
                        Keep scrolling to see some of the stuff I've worked on. Feel free to contact me!
                    </p>
                    <span className='farewell'>Thanks for visiting!</span>
                </div>
               
            </div>
            
        </section>
    )
}

export default About;