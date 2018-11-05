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
import { scrollAction } from '../src/redux/actions/scrollAction';

class App extends Component {

    componentDidMount() {
        {this.props.EnLang()}
    }

    render() {

        window.addEventListener("scroll", this.props.scrollAction);

        return (
            <div className="root root-wrap">

                <a
                    onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
                    className={this.props.scrollUser > this.props.scrollHeight ? "scrollShow" : "scrollHide"}
                    title="toUp"
                ><i className="far fa-arrow-alt-circle-up icon-up"></i></a>

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

function MSTP(state) {
    return {
        scrollUser: state.scrollUp,
        scrollHeight: state.ClientHeigth,
    }
}

function MDTP(dispatch) {
    return {
        EnLang: function () {
            dispatch(English())
        },
        scrollAction: function () {
            dispatch(scrollAction())
        }
    }
}

export default connect(MSTP, MDTP)(App);