import React from 'react';

function Nav() {
    const tabs = [
        {
            title: 'About Me',
            source: '#'
        },
        {
            title: 'Projects',
            source: '#'
        },
        {
            title: 'Resume',
            source: '#'
        }
    ]

    return (
        <nav>
            {tabs.map((link) => (
                <h1><a href={link.source}>{link.title}</a></h1>
            ))}
        </nav>
    )
}

export default Nav;