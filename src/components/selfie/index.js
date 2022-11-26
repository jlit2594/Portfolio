import React from 'react';
import selfie from '../../img/headshot.png'
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function Selfie() {
    return (
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
    )
}

export default Selfie;