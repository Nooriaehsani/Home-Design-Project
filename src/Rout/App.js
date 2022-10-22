import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom/cjs/react-router-dom.min';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import Navbar from "../Layout/Navbar/Navbar";
import Home from "../Layout/Home/Home";
import AboutUs from "../pages/AboutUs";
import Features from "../pages/Features";
import Footer from '../Layout/Footer/Footer';
import Contact from '../pages/Contact';

const APP = () => {
    return ( 
        <div>
            <Router>
            <Navbar/>
            <Switch>
                <Route exact path="/"> 
                <Home/>
                </Route>
                <Route path="/AboutUs">
                    <AboutUs/>
                </Route>
                <Route path="/Features">
                    <Features/>
                </Route>
               
              
                <Route path="/Contact">
                        <Contact/>
                </Route>
            </Switch>
            </Router>
            <Footer/>
        </div>
     );
}
 
export default APP;