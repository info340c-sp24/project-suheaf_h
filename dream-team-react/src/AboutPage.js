import Interest from './Interest.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavScrollExample from './NavBar';
import Feed from './Feed.js';
import React from 'react';
import Suheaf from './Suheaf.jpg'
import Bilal from './Bilal.jpg';
import Abdelrahman from './Abdelrahman.jpeg';
import "./css/AboutPage.css"
export default class AboutPage extends React.Component {
    render() {
        return(
    <div className="about-team-container">
    <h1>About the Dream Team</h1>
    <div className="team-members">
        <div className="team-member">
            <img src={Suheaf} alt="Suheaf Hussein" />
            <div className="member-info">
                <h2>Suheaf Salah Hussein</h2>
                <p>Software Engineer / Product Manager</p>
                <p>Suheaf Hussein is an ambitious student at the University of Washington, where he is pursuing a degree in Informatics. 
                    Actively involved in the "Dream Team" project, Suheaf's keen interest in software engineering has led him to assume 
                    the role of software engineer within the group. A significant highlight of his contributions is the development of
                     pages tailored to user interests. These pages not only enable users to personalize and refine their "for you" pages 
                     based on their preferences but also feature dynamic player stats, adding an exciting layer of personalization to the 
                     platform. Suheaf's dedication to crafting enhanced user experiences through thoughtful design and functionality
                      exemplifies his commitment to technological excellence.</p>
            </div>
        </div>
        <div className="team-member">
            <img src={Bilal} alt="Bilal Duale" />
            <div className="member-info">
                <h2>Bilal Duale</h2>
                <p>Designer / Software Enginner Developer</p>
                <p>
                    Bilal Duale is a driven student majoring in Informatics at The University of Washington, actively engaged in the Info 340 Dream Team project. With a strong interest in 
                    software engineering, Bilal takes on the role of a software engineer within the team, contributing significantly to various aspects of the project. Notably, he has 
                    spearheaded the development of key pages including the "For You," feed, and profile pages, aimed at enhancing user engagement and personalization. Through 
                    his innovative approach, users can now customize and filter their content based on their preferences, while also enjoying random player stats for added 
                    excitement. Bilal's commitment to crafting intuitive designs and seamless functionality underscores his dedication to excellence in the ever-evolving 
                    field of technology.
                    </p>
            </div>
        </div>
        <div className="team-member">
            <img src={Abdelrahman} alt="Abdelrahman Idriis Ali" />
            <div className="member-info">
                <h2>Abdelrahman Idris Ali</h2>
                <p>Frontend Developer</p>
                <p>
                    Abdelrahman Ali is an aspiring software developer majoring in Informatics at the University of Washington. With a passion 
                    for blending technology with creativity, Abdelrahman takes on the role of a developer within the team. In particular, 
                    he helped in designing and implementing the opening and login pages for Dream Team leading to users having a seamless
                    and pleasing experience for the user. As the gateway to the app itself, we intent that these pages helps set the tone 
                    for a platform that creates interesting connections and dialogue between sport fans and users worldwide. 

                </p>
            </div>
        </div>
       
    </div>
</div>
        )
    }
}