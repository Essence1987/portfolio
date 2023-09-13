import React from 'react';
import './Portfolio.css';

function Portfolio() {
    // Array of project objects with details
    const projects = [
        {
            name: "Project 1",
            description: "Description of Project 1.",
            image: "project1.jpg",
            liveLink: "https://example.com/project1",
            githubLink: "https://github.com/yourusername/project1",
        },
        {
            name: "Project 2",
            description: "Description of Project 2.",
            image: "project2.jpg",
            liveLink: "https://example.com/project2",
            githubLink: "https://github.com/yourusername/project2",
        },
        // Add more projects here
    ];

    return (
        <div>
            <h2>Portfolio</h2>
            <div className="projects">
                {projects.map((project, index) => (
                    <div className="project" key={index}>
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
        </div>
    );
}

export default Portfolio;
