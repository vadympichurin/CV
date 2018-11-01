import { combineReducers } from 'redux';

import langObject from './langObject';
import switchHome from './switchHome';
import switchTechSkills from './switcherTechSkills';
import switchProject from './switctherProjects';
import switchWork from './switcherWork';
import switchEdu from './switcherEdu';
import switchSoft from './switcherSoftSkills';

const rootReducer = combineReducers({

    langObject,
    switchHome,
    switchTechSkills,
    switchProject,
    switchWork,
    switchEdu,
    switchSoft,

});

export default rootReducer;