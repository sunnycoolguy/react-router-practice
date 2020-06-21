import React from 'react';
import SecondPage from './SecondPage.js';
import HomePage from './HomePage.js';
import FirstPage from './FirstPage.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';



class App extends React.Component {

    render(){
        return (
        <Router>
            <nav>The Riddle</nav>
            <Switch>
                <Route path='/' exact component={HomePage}/>
                <Route path='/second' exact component={SecondPage}/>
                <Route path='/first' exact component={FirstPage}/>
            </Switch>
        </Router>
        );
    }
}

export default App;