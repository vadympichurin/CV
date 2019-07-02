import React from 'react';
import './SoftSkills.css';

import { connect } from 'react-redux';

const SoftSkills = ({langObject, switchSoft}) => {
    return (
        <div className={`soft-wrapper ${switchSoft ? "soft-visible" : "soft-invisible"}`}>
            <h3 className='edu-title'>
                <i className="fas fa-users title-icon"></i>
                {langObject.softskills}</h3>

            <div className='soft-section'>
            <p className='prof-skills'>{langObject.profskills}</p>

            <ul className="prof-skills-list">
                <li className="softSkill-name">{langObject.prof1}</li>
                <li className="softSkill-name">{langObject.prof2}</li>
                <li className="softSkill-name">{langObject.prof3}</li>
                <li className="softSkill-name">{langObject.prof4}</li>
            </ul>


            {/* <p className='softSkill-name'>{langObject.prof1}</p>
            <div className='skill-wrapper'>
                <span className='skill-level lev90'></span>
                <span className='skill-percent'>90%</span>
            </div> */}

            {/* <p className='softSkill-name'>{langObject.prof2}</p>
            <div className='skill-wrapper'>
                <span className='skill-level lev85'></span>
                <span className='skill-percent'>85%</span>
            </div> */}

            {/* <p className='softSkill-name'>{langObject.prof3}</p>
            <div className='skill-wrapper'>
                <span className='skill-level lev90'></span>
                <span className='skill-percent'>90%</span>
            </div> */}

            {/* <p className='softSkill-name'>{langObject.prof4}</p>
            <div className='skill-wrapper'>
                <span className='skill-level lev70'></span>
                <span className='skill-percent'>70%</span>
            </div> */}
            </div>

            <div className='soft-section'>
            <p className='prof-skills'>{langObject.langskils}</p>

            <ul>
                <li className='softSkill-name'>{langObject.lang1}</li>
                <li className='softSkill-name'>{langObject.lang2}</li>
            </ul>

            {/* <p className='softSkill-name'>{langObject.lang1}</p>
            <div className='skill-wrapper'>
                <span className='skill-level lev70'></span>
                <span className='skill-percent'>70%</span>
            </div> */}

            {/* <p className='softSkill-name'>{langObject.lang2}</p>
            <div className='skill-wrapper'>
                <span className='skill-level lev35'></span>
                <span className='skill-percent'>35%</span>
            </div> */}
            </div>


            <p className='prof-skills'>{langObject.hobbies}</p>

            <div className='hobby-wrapper soft-section'>

                <div className='hobby-item'>
            <i className="fas fa-globe-americas hobby-icon"></i>
            <p className='hobby-title'>{langObject.hobby1}</p>
                </div>
                <div className='hobby-item'>
            <i className="fas fa-hiking hobby-icon"></i>
            <p className='hobby-title'>{langObject.hobby2}</p>
                </div>
                <div className='hobby-item'>
            <i className="fas fa-coffee hobby-icon"></i>
            <p className='hobby-title'>{langObject.hobby3}</p>
                </div>
            </div>

        </div>
    )
};

function MSTP(state) {
    return {
        langObject: state.langObject,
        switchSoft: state.switchSoft,
    }
}

export default connect(MSTP)(SoftSkills);