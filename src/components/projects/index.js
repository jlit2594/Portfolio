import React from 'react';
import megaPhoto from '../../img/megabytes.png';
import climaPhoto from '../../img/weather.png';
import pixelPhoto from '../../img/pixelview.png';
import techPhoto from '../../img/techthoughts.png';


function Projects() {
    const myProjects = [
        {
            title: 'MegaBytes',
            link: 'https://slachelier.github.io/MegaBytes/',
            img: megaPhoto,
            description: "MegaBytes was a group project focusing on delivering a list of the best restaurants in a particular location. It implements a third-party API called 'Global Restaurants'. I handled the API implementation as well as some of the styling."
        },
        {
            title: 'Clima - Interactive Weather App',
            link: 'https://jlit2594.github.io/weather-app/',
            img: climaPhoto,
            description: 'Clima is a weather app that obtains current weather information for a locale using the OpenWeather API. I created this app entirely by myself.'
        },
        {
            title: 'PixelView',
            link: 'https://glacial-scrubland-16124.herokuapp.com/',
            img: pixelPhoto,
            description: 'PixelView was another group project. The goal was to build a review website where gamers could write reviews about their favorite games.'
        },
        {
            title: 'Tech Thoughts',
            link: 'https://floating-shelf-79387.herokuapp.com/',
            img: techPhoto,
            description: "Tech Thoughts is a blog website specializing in topics surrouding the tech world. It's a full-stack application that I built by myself. I used mostly the same layout as in PixelView, just a little more polished."
        }
    ]

    return (
        <section className='projects'>
            {myProjects.map((project) => (
                <div className='project'>
                    <div>
                        <img className='project-img' src={project.img} />
                    </div>
                    <div>
                        <h2 className='project-title'><a className='no-line' href={project.link}>{project.title}</a></h2>
                        <p>{project.description}</p>
                    </div>

                </div>
            ))}
        </section>
    )
}

export default Projects;