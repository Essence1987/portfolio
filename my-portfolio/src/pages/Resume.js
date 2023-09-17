import React from 'react';
import '../pages/Resume.css';

function Resume() {
  return (
    <div className="resume-card">
      <h2>Resume</h2>

      {/* Downloadable resume link */}
      <a
        href="/Resume.pdf" //
        download // This attribute ensures the file is downloaded when clicked
      >
        Download My Resume
      </a>

      {/* Programming Languages */}
      <h3>Programming Languages:</h3>
      <ul>
        <li>JavaScript</li>
      </ul>

      {/* Web Development */}
      <h3>Web Development:</h3>
      <ul>
        <li>HTML5</li>
        <li>CSS</li>
        <li>React.js</li>
        <li>Node.js</li>
        <li>Express.js</li>
      </ul>

      {/* Database */}
      <h3>Database:</h3>
      <ul>
        <li>SQL</li>
        <li>MongoDB</li>
      </ul>

      {/* Version Control */}
      <h3>Version Control:</h3>
      <ul>
        <li>Git</li>
      </ul>

      {/* Tools and Technologies */}
      <h3>Tools and Technologies:</h3>
      <ul>
        <li>Visual Studio Code</li>
        <li>RESTful API design</li>
        <li>Responsive web design</li>
        <li>Agile development methodologies</li>
        <li>Test-driven development (TDD)</li>
        <li>Problem-solving and debugging</li>
      </ul>

      {/* Soft Skills */}
      <h3>Soft Skills:</h3>
      <ul>
        <li>Strong communication skills</li>
        <li>Teamwork and collaboration</li>
        <li>Adaptability</li>
        <li>Time management</li>
        <li>Attention to detail</li>
      </ul>
    </div>
  );
}

export default Resume;
