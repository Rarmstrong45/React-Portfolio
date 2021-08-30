import React from 'react'
import profilePicture from '../assets/profile-picture.jpg';

function About () {
    return (
        <section className="my-5">
            <div>
                <h2 id="about">About me</h2>
                <img src={profilePicture} className="my-2" style={{ width: "30%", borderRadius: 200 / 2}} alt="Ryan Armstrong Headshot" />
                <p>My name is Ryan Armstrong, and I am a full stack web developer. I am currently versed in JavaScript (ES5 and ES6), jQuery, Web APIs and AJAX, 
                    Node and several common npm packages, Express.js, MySQL, SQLite3, and object relational mapping with Sequelize, MongoDB and Mongoose, 
                    GraphQL, MVC frameworks, React, Redux, Amazon Web Services, HTML, CSS, handlebars templating, CSS frameworks such as Bootstrap and Bulma, 
                    using Object Oriented Design and Test Driven Design methodologies, responsive and mobile first design, and designing for accessibility. 
                    I look forward to bringing my coding skills, systems level thinking, and work ethic to your projects!</p>
            </div>
            <div>
                <h2> Programming Languages &amp; Tools</h2>
                    <p>
                        <span className = "icon" title = 'HTML 5' data-tooltip = "HTML 5"><i className="fab fa-html5"></i></span>{" "}
                        <span className = "icon" title = 'CSS' data-tooltip = 'CSS'><i className="fab fa-css3"></i></span>{" "}
                        <span className = "icon" title = 'JavaScript' data-tooltip = 'JavaScript'><i className="fab fa-js"></i></span>{" "}
                        <span className = "icon" title = 'Node.js' data-tooltip = 'Node.js'><i className="fab fa-node-js"></i></span>{" "}
                        <span className = "icon" title = 'npm' data-tooltip = 'npm'><i className="fab fa-npm"></i></span>{" "}
                        <span className = "icon" title = 'Express.js' data-tooltip = 'Express.js' style={{fontFamily: "helvetica neue,open sans,sans-serif"}}>ex</span>{" "}
                        <span className = "icon" title = 'SQL' data-tooltip = 'SQL'><i className="fas fa-database"></i></span>{" "}
                        <span className = "icon" title = 'React' data-tooltip = 'React'><i className="fab fa-react"></i></span>{" "}
                        <span className = "icon" title = 'AWS' data-tooltip = 'Amazon Web Services'><i class="fab fa-aws"></i></span>
                    </p>
                    <h2>Work Flow</h2>
                    <ul>
                        <li>GitHub Projects and Issues / Atlassian Gitflow</li>
                        <li>Agile</li>
                    </ul>
            </div>
        </section>
    );
}

export default About;