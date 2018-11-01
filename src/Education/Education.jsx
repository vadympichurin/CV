import React from 'react';
import './Education.css';

import { connect } from 'react-redux';

const Education = ({langObject, switchEdu}) => {
    return (

        <div className= {`edu-wrapper ${switchEdu ? "edu-visible" : "edu-invisible"}`}>
            <h3 className='edu-title'>
                <i className="fas fa-university title-icon"></i>
                {langObject.education}</h3>

            <ul className='work-list'>

                    <li className='work-item'>
                        <p className='work-years'>{langObject.edukpiyears}</p>
                        <p className='work-post'>{langObject.eduposition}</p>
                        <p className='work-company'>{langObject.edukpi}</p>
                    </li>
            </ul>

            <h3 className='edu-title'>
                <i className="fas fa-graduation-cap title-icon"></i>
                {langObject.addeducation}</h3>

            <ul className='work-list'>

                <li className='work-item'>
                    <p className='work-years'>{langObject.addeduyears4}</p>
                    <p className='work-post'>{langObject.addeducourse4}</p>
                    <p className='work-company'>{langObject.addedu4}</p>
                </li>

                <li className='work-item'>
                    <p className='work-years'>{langObject.addeduyears3}</p>
                    <p className='work-post'>{langObject.addeducourse3}</p>
                    <p className='work-company'>{langObject.addedu3}</p>
                </li>

                <li className='work-item'>
                    <p className='work-years'>{langObject.addeduyears2}</p>
                    <p className='work-post'>{langObject.addeducourse2}</p>
                    <p className='work-company'>{langObject.addedu2}</p>
                </li>

                <li className='work-item'>
                    <p className='work-years'>{langObject.addeduyears1}</p>
                    <p className='work-post'>{langObject.addeducourse1}</p>
                    <p className='work-company'>{langObject.addedu1}</p>
                </li>


            </ul>


        </div>

    )
};

function MSTP(state) {
    return {
        langObject: state.langObject,
        switchEdu: state.switchEdu,
    }
}

export default connect(MSTP)(Education);