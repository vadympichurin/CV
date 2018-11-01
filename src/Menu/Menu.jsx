import React from 'react';
import './Menu.css';

import { connect } from 'react-redux';
import { homeCenterAction, homeLeftAction } from '../redux/actions/switchHomeAction';
import { techInvisible, techVisible } from '../redux/actions/techSkillsAction';
import { projectInvisible, projectVisible } from '../redux/actions/switchProjectAction';
import { workInvisible, workVisible } from '../redux/actions/switchWorkAction';
import { eduInvisible, eduVisible } from '../redux/actions/switchEduAction';
import { softInvisible, softVisible } from '../redux/actions/switchSoftAction';


const Menu = ({homeLeft, homeCenter, techInvisible, techVisible, projectInvisible, projectVisible, workInvisible, workVisible, eduVisible, eduInvisible, softInvisible, softVisible, switchTechSkills, switchProject, switchWork, switchEdu, switchSoft, langObject}) => {

    function homeOnClick() {
        homeCenter();
        techInvisible();
        projectInvisible();
        workInvisible();
        eduInvisible();
        softInvisible();
    }

    function techSkillsOnclick() {
        homeLeft();
        techVisible();
        projectInvisible();
        workInvisible();
        eduInvisible();
        softInvisible();
    }

    function projectOnclick() {
        homeLeft();
        techInvisible();
        projectVisible();
        workInvisible();
        eduInvisible();
        softInvisible();
    }

    function workOnclick() {
        homeLeft();
        techInvisible();
        projectInvisible();
        workVisible();
        eduInvisible();
        softInvisible();
    }

    function eduOnclick() {
        homeLeft();
        techInvisible();
        projectInvisible();
        workInvisible();
        eduVisible();
        softInvisible();
    }

    function softOnclick() {
        homeLeft();
        techInvisible();
        projectInvisible();
        workInvisible();
        eduInvisible();
        softVisible();
    }

    return (
        <div className='menu-wrapper'>
            <ul className='menu-list'>
                <li className='menu-item bgc-green' onClick={homeOnClick}>{langObject.homeButton}</li>
                <li className={`menu-item ${switchTechSkills ? "bgc-grey" : "bgc-green"}`} onClick={techSkillsOnclick}>{langObject.techButton}</li>
                <li className={`menu-item ${switchProject ? "bgc-grey" : "bgc-green"}`} onClick={projectOnclick}>{langObject.projButton}</li>
                <li className={`menu-item ${switchWork ? "bgc-grey" : "bgc-green"}`}  onClick={workOnclick}>{langObject.expButton}</li>
                <li className={`menu-item ${switchEdu ? "bgc-grey" : "bgc-green"}`} onClick={eduOnclick}>{langObject.eduButton}</li>
                <li className={`menu-item ${switchSoft ? "bgc-grey" : "bgc-green"}`} onClick={softOnclick}>{langObject.softButton}</li>
            </ul>

        </div>
    )
};

function MSTP(state) {
    return {
        switchTechSkills: state.switchTechSkills,
        switchProject: state.switchProject,
        switchWork: state.switchWork,
        switchEdu: state.switchEdu,
        switchSoft: state.switchSoft,
        langObject: state.langObject,
    }
}

function MDTP(dispatch) {
    return {
        homeLeft: function () {
            dispatch(homeLeftAction())
        },
        homeCenter: function () {
            dispatch(homeCenterAction())
        },
        techInvisible: function () {
            dispatch(techInvisible())
        },
        techVisible: function () {
            dispatch(techVisible())
        },
        projectInvisible: function () {
            dispatch(projectInvisible())
        },
        projectVisible: function () {
            dispatch(projectVisible())
        },
        workInvisible: function () {
            dispatch(workInvisible())
        },
        workVisible: function () {
            dispatch(workVisible())
        },
        eduVisible: function () {
            dispatch(eduVisible())
        },
        eduInvisible: function () {
            dispatch(eduInvisible())
        },
        softInvisible: function () {
            dispatch(softInvisible())
        },
        softVisible: function () {
            dispatch(softVisible())
        },
    }
}

export default connect(MSTP, MDTP)(Menu);