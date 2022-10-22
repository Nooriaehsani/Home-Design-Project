import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom/cjs/react-router-dom.min';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import Navbar from "../Layout/Navbar/Navbar";
import Home from "../Layout/Home/Home";
import AboutUs from "../pages/AboutUs";
import Features from "../pages/Features";

const APP = () => {
    return ( 
        <div>
            <Router>
            <Navbar/>
            <switch>
                <Route exact path="/"> 
                <Home/>
                </Route>
                <Route path="/AboutUs">
                    <AboutUs/>
                </Route>
                <Route path="/Features">
                    <Features/>
                    </Route>
         
            </switch>
            </Router>
        </div>
     );
}
 
export default APP;