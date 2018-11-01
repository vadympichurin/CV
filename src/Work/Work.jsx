import React from 'react';
import './Work.css';

import { connect } from 'react-redux';

const Work = ({langObject, switchWork}) => {
    return (
        <div className= {`work-wrapper ${switchWork ? "work-visible" : "work-invisible"}`}>
            <h3 className='work-title'>
                <i className="fas fa-briefcase title-icon"></i>
                {langObject.workexp}</h3>

            <ul className='work-list'>
                <li className='work-item'>
                    <p className='work-years'>{langObject.workdate5}</p>
                    <p className='work-post'>{langObject.workposition5}</p>
                    <p className='work-company'>{langObject.workcompany5}</p>
                </li>

                <li className='work-item'>
                    <p className='work-years'>{langObject.workdate4}</p>
                    <p className='work-post'>{langObject.workposition4}</p>
                    <p className='work-company'>{langObject.workcompany4}</p>
                </li>

                <li className='work-item'>
                    <p className='work-years'>{langObject.workdate3}</p>
                    <p className='work-post'>{langObject.workposition3}</p>
                    <p className='work-company'>{langObject.workcompany3}</p>
                </li>

                <li className='work-item'>
                    <p className='work-years'>{langObject.workdate2}</p>
                    <p className='work-post'>{langObject.workposition2}</p>
                    <p className='work-company'>{langObject.workcompany2}</p>
                </li>

                <li className='work-item'>
                    <p className='work-years'>{langObject.workdate1}</p>
                    <p className='work-post'>{langObject.workposition1}</p>
                    <p className='work-company'>{langObject.workcompany1}</p>
                </li>

            </ul>

        </div>
    )
};

function MSTP(state) {
    return {
        langObject: state.langObject,
        switchWork: state.switchWork,
    }
}

export default connect(MSTP)(Work);