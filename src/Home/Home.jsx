import React from 'react';
import photo from '../img/photo.jpeg';

import './Home.css';

import { connect } from 'react-redux';
import { English, Russian, Spanish, Ukrainian  } from '../redux/actions/langObjectAction';


const Home = ({RuLang, UaLang, EnLang, EsLang, langObject, homeCenter, homeLeft, switchHome}) => {

    return (
        <div className={`home-wrapper ${switchHome ? 'home-left' : 'home-center' }`}>
            <div className='language-box'>
                <span className='en' id="EN" onClick={EnLang}></span>
                <span className='ru' id="RU" onClick={RuLang}></span>
                <span className='es' id="ES" onClick={EsLang}></span>
                <span className='ua' id="UA" onClick={UaLang}></span>
            </div>

            <img className='my-photo' src={photo} alt="my photo"/>

            <h1>{langObject.greeting}<span className='my-name'>{langObject.name}</span> </h1>
            <h4 className='position'>Front-End Developer</h4>
            <p className='about'>A pessimist sees the difficulty in every opportunity;
                an optimist sees the opportunity in every difficulty.
                (Sir Winston Churchill)</p>

            <div className='contacts'>
                <span className='email'>email: vadympichurin@gmail.com / </span>
                <span className='mobTitle'>{langObject.phone}</span>
                <span className='mobile'>+380667795483</span>
            </div>

            <div className='social'>
                <a className='social-link' target="_blank" href="https://www.linkedin.com/in/vadym-pichurin-224a37a2/"><i className="fab fa-linkedin social-icon"></i></a>
                <a className='social-link' target="_blank" href="https://www.facebook.com/vv.pichurin"><i className="fab fa-facebook-square social-icon"></i></a>
                <a className='social-link' target="_blank" href="https://github.com/vadympichurin?tab=repositories"><i className="fab fa-github social-icon"></i></a>
            </div>


                <a className='download-link download' 
                // href="https://drive.google.com/file/d/1PpEIfkvKYyBH8lwdGMu9i2G3N1JQ5RiA/view"
                href="https://drive.google.com/file/d/1Kf4SAX7ijt-iEmiIOAuA7_RuFyk2HVz-/view"
                target='_blank'>{langObject.download}</a>

        </div>
    )
};

function MSTP(state) {
    return {
        langObject: state.langObject,
        switchHome: state.switchHome,
    }
}

function MDTP(dispatch) {
    return {
        RuLang: function () {
            dispatch(Russian())
        },
        UaLang: function () {
            dispatch(Ukrainian())
        },
        EnLang: function () {
            dispatch(English())
        },
        EsLang: function () {
            dispatch(Spanish())
        },
    }
}

export default connect(MSTP, MDTP)(Home);