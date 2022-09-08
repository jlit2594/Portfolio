import React from 'react';

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
        <section>
            <div className="">
                <img />
                <div>
                    {links.map((link) => (
                        <h2><a href={link.source}>{link.title}</a></h2>
                    ))}
                </div>
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </section>
    )
}

export default About;