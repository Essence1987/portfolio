import React from 'react';
import './Portfolio.css';

function Portfolio() {
    // Array of project objects with details
    const projects = [
        {
            name: "Med Track",
            description: "MedTrack is a groundbreaking application designed to transform the medical school experience for both students and faculty. It provides a streamlined platform for medical students to share their clinical rotation experiences, enabling continuous improvement and ensuring high-quality medical education.",
            image: "./Medtrack.png",
            liveLink: "https://limitless-sea-25303-7c8a3f9496d2.herokuapp.com/",
            githubLink: "https://github.com/Essence1987/medtrack",
        },
        {
            name: "Market Monitor",
            description: "Introducing Market Monitor, your go-to companion for staying updated with the latest stock market information. Whether you're a seasoned investor, a day trader, or simply curious about stock market trends, this application provides you with quick and easy access to essential data.",
            image: "./MarketMonitor.png",
            liveLink: "https://essence1987.github.io/MarketMonitor/",
            githubLink: "https://github.com/Essence1987/MarketMonitor",
        },
        {
            name: "Weather Dashboard",
            description: "The Weather Dashboard is your tool for staying up-to-date with weather conditions. Whether you're planning a weekend getaway or just want to know the forecast for your local area, this user-friendly dashboard has you covered.",
            image: "./weather.gif",
            liveLink: "https://essence1987.github.io/Weather/",
            githubLink: "https://github.com/Essence1987/Weather",
        },
        {
            name: "Logo Generator",
            description: "Simplify logo creation by answering a few quick questions in your terminal. With this application, you can craft a personalized SVG logo based on your preferences. The SVG file generated can be effortlessly integrated into any project, providing you with a unique visual identity.",
            image: "./LogoGenerator.png",
            liveLink: "",
            githubLink: "https://github.com/Essence1987/logos",
        },
        {
            name: "Note Taker",
            description: "Express.js: Note Taker is your go-to solution for efficient note creation, storage, and management. Whether you're a student, professional, or just someone who likes to keep their thoughts organized, this user-friendly application has got you covered.",
            image: "./notes.gif",
            liveLink: "",
            githubLink: "https://github.com/Essence1987/notes",
        },
        {
            name: "Password Generator",
            description: "JavaScript: Password Generator is your trusted tool for creating strong and secure passwords effortlessly. Whether you need a robust password for your online accounts or want to enhance your digital security, this application has got you covered.",
            image: "./PassWordGenerator.png",
            liveLink: "https://essence1987.github.io/Password/",
            githubLink: "https://github.com/Essence1987/Password",
        },
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
                            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="link-box">Live</a>
                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="link-box">GitHub</a>
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
