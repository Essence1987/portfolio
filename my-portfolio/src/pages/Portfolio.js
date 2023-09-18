import React from 'react';
import './Portfolio.css';

function Portfolio() {
    // Array of project objects with details
    const projects = [
        {
            name: "Med Track",
            description: "MedTrack is a groundbreaking application designed to transform the medical school experience for both students and faculty. It provides a streamlined platform for medical students to share their clinical rotation experiences, enabling continuous improvement and ensuring high-quality medical education.",
            image: "/Medtrack.png",
            liveLink: "https://limitless-sea-25303-7c8a3f9496d2.herokuapp.com/",
            githubLink: "https://github.com/Essence1987/medtrack",
        },
        {
            name: "Market Monitor",
            description: "Introducing Market Monitor, your go-to companion for staying updated with the latest stock market information. Whether you're a seasoned investor, a day trader, or simply curious about stock market trends, this application provides you with quick and easy access to essential data.",
            image: "/MarketMonitor.gif",
            liveLink: "https://essence1987.github.io/MarketMonitor/",
            githubLink: "https://github.com/Essence1987/MarketMonitor",
        },
        {
            name: "Weather Dashboard",
            description: "The Weather Dashboard is your tool for staying up-to-date with weather conditions. Whether you're planning a weekend getaway or just want to know the forecast for your local area, this user-friendly dashboard has you covered.",
            image: "/Weather.gif",
            liveLink: "https://essence1987.github.io/Weather/",
            githubLink: "https://github.com/Essence1987/Weather",
        }
        // {
        // Exmple of a project object
        //     name: "Project title",
        //     description: "Project Description",
        //     image: "/image.gif",
        //     liveLink: "Link to live website here",
        //     githubLink: "link to github repo here",
        // },
        // Add more projects here
    ];

    return (
        <div className="portfolio">
            <h2>Portfolio</h2>
            <div className="project-cards">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <h3>{project.name}</h3>
                        <img src={project.image} alt={project.name} />
                        <p>{project.description}</p>
                        <div className="project-links">
                            <a href={project.liveLink} target="_blank" rel="noopener noreferrer">Live</a>
                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
                        </div>
                    </div>
                ))}
            </div>
            <div className='bottom-spacer'>
            </div>
        </div>
    );
}

export default Portfolio;
