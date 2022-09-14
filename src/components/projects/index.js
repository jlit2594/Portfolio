import React from 'react';
import megaPhoto from '../../img/megabytes.png';
import climaPhoto from '../../img/weather.png';
import techPhoto from '../../img/techthoughts.png';
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
            description: "Tech Thoughts is a blog website specializing in topics surrouding the tech world. It's a full-stack application that I built by myself. I used mostly the same layout as in PixelView, just a little more polished."
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
            title: 'README Generator',
            link: '',
            github: 'https://github.com/jlit2594/readme-generator',
            description: "This is a command-line application that accepts user input and generates a high-quality ReadMe for the project they may be working on."
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
                                <Card.Link href={project.github}><FaGithub  color='white' fontSize='1.5rem'/></Card.Link>                                
                            </div>

                        </Card.Body>
                    </Card>
                ))}
            </div>

        </section>
    )
 
};

export default Projects;