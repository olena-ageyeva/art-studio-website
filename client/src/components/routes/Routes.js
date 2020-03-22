import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
//import ThemeSwitcher from "./ThemeSwitcher";
import Form from "./Gallery";
import View from "./View";
import Contact from "./ContactUs"

export default () =>   
    <>         
         <Route exact path="/" component={Home} />
         <Route exact path="/about" component={About} />
         <Route exact path="/login" component={Login} />
         {/* <Route exact path="/theme" component={ThemeSwitcher} /> */}
         <Route exact path="/gallery" component={Form} />
         <Route path="/view" component={View}/>
         <Route exact path="/contact" component={Contact}/>
    </>
;