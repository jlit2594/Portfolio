import React from 'react';

function Projects() {
    const myProjects = [
        {
            title: 'MegaBytes',
            link: '',
            img: '',
            description: 'This is a group project'
        },
        {
            title: 'Clima - Interactive Weather App',
            link: '',
            img: '',
            description: 'blahhhh'
        },
        {
            title: 'PixelView',
            link: '',
            img: '',
            description: 'group'
        },
        {
            title: 'Tech Thoughts',
            link: '',
            img: '',
            description: 'asdfsdfasdf'
        }
    ]

    return (
        <section>
            {myProjects.map((project) => (
                <div>
                    <div>
                        <img src={project.img} />
                    </div>
                    <div>
                        <h2><a href={project.link}>{project.title}</a></h2>
                        <p>{project.description}</p>
                    </div>

                </div>
            ))}
        </section>
    )
}

export default Projects;