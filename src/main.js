import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';

class Main extends Component {
    
    render(){
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/about' component={About} />
                </Switch>
            </main>
        )
    }
}
export default Main;