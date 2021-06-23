import React from 'react';
import JobTimeline from './JobTimeline'
import '../styles/experience.scss';


const Experience = () => {
    return (
        <div name="experience" className="experience-container">
            <div className="experience-title">
                <h2>Experience</h2>
            </div>
            <div className="experience-content">
                <JobTimeline />
            </div>    
        </div>
    )
}

export default Experience;