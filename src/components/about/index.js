import React from 'react';
import selfie from '../../img/headshot.png'
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function About() {

    return (
        <section className='first-section'>
            <div className='about'>
                <div className="pic-link">
                    <img className='selfie' alt='This is my headshot.' src={selfie} />
                    <div className='middle'>
                        <div className='links'>
                            <a className='icon' href=''><FaLinkedin color='white' fontSize='2.5rem' /></a>
                            <a className='icon' href='https://github.com/jlit2594'><FaGithub color='white' fontSize='2.5rem'/></a>
                            <a className='icon' href='mailto://jdlitton2594@gmail.com'><FaEnvelope color='white' fontSize='2.5rem'/></a>
                        </div>
                    </div>
                </div>

                <div className='bio'>
                    <span className='greeting'>Hello!</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <span className='farewell'>Thanks for visiting!</span>
                </div>
               
            </div>
            
        </section>
    )
}

export default About;