import React from 'react';
import megaPhoto from '../../img/megabytes.png';
import climaPhoto from '../../img/weather.png';
import techPhoto from '../../img/TechThoughts.png';
import Card from 'react-bootstrap/Card';
import { FaGithub } from 'react-icons/fa';

function Projects() {
    const myProjects = [
        {
            title: 'MegaBytes',
            link: 'https://slachelier.github.io/MegaBytes/',
            github: 'https://github.com/mfactory88/gryff-restaurant-search',
            img: megaPhoto,
            description: "MegaBytes was a group project focusing on delivering a list of the best restaurants in a particular location. It implements a third-party API called 'Global Restaurants'. I handled the API implementation as well as some of the styling."
        },        
        {
            title: 'TechThoughts',
            link: 'https://floating-shelf-79387.herokuapp.com/',
            github: 'https://github.com/jlit2594/blog',
            img: techPhoto,
            description: "A blogging platform focused on posts of the technological variety"
        },
        {
            title: 'Weather App',
            link: 'https://jlit2594.github.io/weather-app/',
            github: 'https://github.com/jlit2594/weather-app',
            img: climaPhoto,
            description: 'Clima is a weather app that obtains current weather information for a locale using the OpenWeather API. I created this app entirely by myself.'
        },

    ]

    const otherStuff = [
        {
            title: 'PixelView',
            link: 'https://glacial-scrubland-16124.herokuapp.com/',
            github: 'https://github.com/SyrusFarris/pixleview-anon',
            description: 'PixelView was another group project. The goal was to build a review website where gamers could write reviews about their favorite games.'
        },
        {
            title: 'ListenUp!',
            link: 'https://stormy-temple-70664.herokuapp.com/',
            github: 'https://github.com/jlit2594/hike-project-3',
            description: "Listen Up! will be a blog site specializing in music. It's still a work in progress."
        }
    ]

    return (
        <section className='second-section' id='projects'>
            <div className='big-projects'>
            {myProjects.map((project) => (
                <Card className='project-main d-flex flex-row' id={project.title}>
                    <Card.Img className='p-img' src={project.img}></Card.Img>
                    <Card.Body className='big-projects'>
                        <div className='p-bio'>
                            <Card.Title className='p-title'>{project.title}</Card.Title>
                            <Card.Text className='p-desc'>{project.description}</Card.Text>
                        </div>
                        <div className='p-footer'>
                            <Card.Link className='no-line' href={project.link}>Visit the Site</Card.Link>
                            <Card.Link className='icon' href={project.github}><FaGithub color='white' fontSize='1.5rem'/></Card.Link>
                        </div>
                    </Card.Body>
                </Card>
            ))}                
            </div>
            <div className='small-projects'>
                {otherStuff.map((project) => (
                    <Card className='s-project'>
                        <Card.Body>
                            <Card.Title className='p-title'>{project.title}</Card.Title>
                            <Card.Text>
                                {project.description}
                            </Card.Text>
                            <div className='p-footer s-footer'>
                                <Card.Link className='no-line' href={project.link}>See More</Card.Link>
                                <Card.Link className='icon' href={project.github}><FaGithub  color='white' fontSize='1.5rem'/></Card.Link>                                
                            </div>

                        </Card.Body>
                    </Card>
                ))}
            </div>

        </section>
    )
 
};

export default Projects;