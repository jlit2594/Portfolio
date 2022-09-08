import React from 'react';
import selfie from '../../img/me.jpeg'

function About() {
    const links = [
        {
            title: 'GitHub',
            source: '"https://github.com/jlit2594'
        },
        {
            title: 'LinkedIn',
            source: '#'
        },
        {
            title: 'Email',
            source: 'mailto://jdlitton2594@gmail.com'
        }
    ]

    return (
        <section className='first-section'>
            <div className='about'>
                <div className="pic-link col">
                    <img className='selfie' src={selfie} />
                    <div>
                        {links.map((link) => (
                            <h2 class='links'><a className='no-line' href={link.source}>{link.title}</a></h2>
                        ))}
                    </div>
                </div>
                <div className='bio col'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
            
        </section>
    )
}

export default About;