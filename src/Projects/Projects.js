import React from 'react';

import './Projects.css';
import { connect } from 'react-redux';

const Projects = ({langObject, switchProject}) => {
    return (
        <div className={`projects-wrapper ${switchProject ? 'project-right' : 'project-invisible'}`}>
            <h3 className='projects-title'>
                <i className="far fa-file-code title-icon"></i>
                {langObject.projects}</h3>

            <ul className='projects-list'>
                <li className='projects-item'>
                    <a className='project-link' href="https://vadympichurin.github.io/BC7-html-Final-Project/build/" target="_blank">Landing GoIT</a>
                    <p className='project-description'>HTML, CSS, SASS, Gulp, Git. This project was a team work, where I was a teamleader.</p>
                </li>

                <li className='projects-item'>
                    <a className='project-link' href="https://vadympichurin.github.io/JS-project-Game/" target="_blank">Memory Game</a>
                    <p className='project-description'>JavaScript</p>
                </li>

                <li className='projects-item'>
                    <a className='project-link' href="https://movie-redux.herokuapp.com/" target="_blank">Filmoteka</a>
                    <p className='project-description'>React & Redux</p>
                </li>

                 <li className='projects-item'>
                    <a className='project-link' href="https://chat-slack-1adf4.firebaseapp.com/" target="_blank">Clone slack chat</a>
                    <p className='project-description'>This is a prototype of slack-chat. Used React, Redux, Semantic Ui, Firebase</p>
                </li>

            </ul>

        </div>
    )
};

function MSTP(state) {
    return {
        langObject: state.langObject,
        switchProject: state.switchProject,
    }
}

export default connect(MSTP)(Projects);