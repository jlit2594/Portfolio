import React from 'react';
import { FaReact, FaBootstrap, FaJsSquare, FaNpm } from 'react-icons/fa';

function Footer() {
    return (
        <footer className='footer'>
            <div>
                <p><a className='f-line' href='https://github.com/jlit2594/new-portfolio'>Click here to view the source code</a></p>
            </div>
            <div className='f-links'>
                <FaReact color='white' fontSize='1.5rem'/>
                <FaBootstrap color='white' fontSize='1.5rem' />
                <FaJsSquare color='white' fontSize='1.5rem' />
                <FaNpm color='white' fontSize='1.5rem' />
            </div>
        </footer>
    )
}

export default Footer;