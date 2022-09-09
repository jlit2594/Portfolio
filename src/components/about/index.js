import React from 'react';
import selfie from '../../img/me.jpeg'
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/ai";

function About() {
    // const links = [
    //     {
    //         title: 'GitHub',
    //         source: '"https://github.com/jlit2594'
    //     },
    //     {
    //         title: 'LinkedIn',
    //         source: '#'
    //     },
    //     {
    //         title: 'Email',
    //         source: 'mailto://jdlitton2594@gmail.com'
    //     }
    // ]

    return (
        <section className='first-section'>
            <div className='about'>
                <div className="pic-link col">
                    <img className='selfie' src={selfie} />
                </div>
                <div className='bio col'>
                    <span className='greeting'>Hello!</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <span className='farewell'>Thanks for visiting!</span>
                </div>
                <div>
                    <div className='links'>
                        <a href=''>{FaLinkedin}</a>
                        <a href=''>{FaGithub}</a>
                        <a href=''>{FaEnvelope}</a>
                    </div>
                </div>
            </div>
            
        </section>
    )
}

export default About;