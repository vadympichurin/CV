import React from 'react';
import './TechSkills.css';

import { connect } from 'react-redux';

const TechSkills = ({langObject, switchTechSkills}) => {
    return (
        <div className={`techSkills-wrapper ${switchTechSkills ? 'techSkills-right' : 'techSkills-invisible'}`}>
            <h3 className='tech-title'>
                <i class="fas fa-laptop title-icon"></i>
                {langObject.techskills}</h3>

            <p className='skill-name'>HTML 5</p>
            <div className='skill-wrapper'>
                <span className='skill-level lev90'></span>
                <span className='skill-percent'>90%</span>
            </div>

            <p className='skill-name'>CSS 3</p>
            <div className='skill-wrapper'>
                <span className='skill-level lev60'></span>
                <span className='skill-percent'>60%</span>
            </div>

            <p className='skill-name'>JavaScript</p>
            <div className='skill-wrapper'>
                <span className='skill-level lev90'></span>
                <span className='skill-percent'>90%</span>
            </div>

            <p className='skill-name'>React.js</p>
            <div className='skill-wrapper'>
                <span className='skill-level lev80'></span>
                <span className='skill-percent'>80%</span>
            </div>

            <p className='skill-name'>Redux.js</p>
            <div className='skill-wrapper'>
                <span className='skill-level lev85'></span>
                <span className='skill-percent'>85%</span>
            </div>

            <p className='skill-name'>SASS</p>
            <div className='skill-wrapper'>
                <span className='skill-level lev70'></span>
                <span className='skill-percent'>70%</span>
            </div>

            <p className='skill-name'>Git (Github)</p>
            <div className='skill-wrapper'>
                <span className='skill-level lev80'></span>
                <span className='skill-percent'>80%</span>
            </div>

            <p className='skill-name'>Trello</p>
            <div className='skill-wrapper'>
                <span className='skill-level lev90'></span>
                <span className='skill-percent'>90%</span>
            </div>

            <p className='skill-name'>JIRA</p>
            <div className='skill-wrapper'>
                <span className='skill-level lev50'></span>
                <span className='skill-percent'>50%</span>
            </div>

            <p className='skill-name'>Node.js</p>
            <div className='skill-wrapper'>
                <span className='skill-level lev30'></span>
                <span className='skill-percent'>30%</span>
            </div>

            <p className='skill-name'>PVSyst</p>
            <div className='skill-wrapper'>
                <span className='skill-level lev90'></span>
                <span className='skill-percent'>90%</span>
            </div>

            <p className='skill-name'>AutoCAD</p>
            <div className='skill-wrapper'>
                <span className='skill-level lev70'></span>
                <span className='skill-percent'>70%</span>
            </div>

        </div>
    )
};


function MSTP(state) {
    return {
        langObject: state.langObject,
        switchTechSkills: state.switchTechSkills,
    }
}

export default connect(MSTP)(TechSkills);