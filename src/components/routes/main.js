import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Landing from '../pages/landing';
import About from '../pages/about';
import Contact from '../pages/contact';
import Projects from '../pages/projects';
export default function Main() {
    return (
     <Switch>
        <Route exact path ="/" component={Landing} />
        <Route path ="/about" component={About} />
        <Route path ="/contact" component={Contact} />
        <Route path ="/projects" component={Projects} />
    </Switch>
    )
}
