import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import BgBubbles from "./components/BgBubbles";
import Profile from "./components/Profile";

import Menu from "./components/Menu";

import {
    HashRouter as Router,
    Switch,
    Route,
    withRouter,
    Redirect
} from "react-router-dom";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Works from "./pages/Works";
import Contact from "./pages/Contact";



function App() {
  return (
      <React.Fragment>
        <div className="page-wrap">
            <BgBubbles />
            <Router>
                <div className="container">
                    <Menu/>
                    <Profile/>
                    <AnimatedRoutes />
                </div>
            </Router>
        </div>
      </React.Fragment>
  );
}

const  AnimatedRoutes = withRouter(({location}) =>
     <TransitionGroup className="transition-wrapper">
        <CSSTransition
            classNames="transition"
            timeout={1000}
            unmountOnExit
            key={location.pathname}
        >
            <Switch>
                <Redirect to='/about' from="/" exact />
                
                <Route exact path="/about">
                    <About/>
                </Route>
                <Route exact path="/resume">
                    <Resume/>
                </Route>
                <Route exact path="/works">
                    <Works/>
                </Route>
                <Route exact path="/contact">
                    <Contact/>
                </Route>
            </Switch>
        </CSSTransition>
    </TransitionGroup>
);

export default App;
