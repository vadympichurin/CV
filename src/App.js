import React, {Component} from 'react';
import './App.css';
import Home from './Home/Home';
import TechSkills from './TechSkills/TechSkills';
import Projects from './Projects/Projects';
import Work from './Work/Work';
import Education from './Education/Education';
import SoftSkills from './SoftSkills/SoftSkills';
import Menu from './Menu/Menu';
import { English } from '../src/redux/actions/langObjectAction';
import { connect } from 'react-redux';


class App extends Component {

    componentDidMount() {
        {this.props.EnLang()}
    }

    render() {

        return (
            <div className="root root-wrap">

                <Menu/>
                <Home/>

                    <TechSkills/>
                    <Projects/>
                    <Work/>
                    <Education/>
                    <SoftSkills/>

            </div>
        );
    }
}

function MDTP(dispatch) {
    return {
        EnLang: function () {
            dispatch(English())
        },
    }
}

export default connect(null, MDTP)(App);
