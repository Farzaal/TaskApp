import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Create from '../Create/';
import List from '../List/';
import Extra from '../Extra';

class Header extends React.Component {

    render() {
        return(
            <Router>
            <div>
            <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">React App</a>
                    </li>
                    <li className="nav-item">
                        <Link to="/create" className="nav-link">Create</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/list" className="nav-link">List</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/extra" className="nav-link">Extra</Link>
                    </li>
                </ul>
            </nav>
            <div className="spacer" style={{ 'margin' : '10px 0 0 0' }}></div>
            <div className="container">
                <Switch>
                    <Route exact path="/" component={ Create }/>
                    <Route exact path="/create" component={ Create }/>
                    <Route exact path="/update/:id" component={ Create }/>
                    <Route exact path="/delete/:id" component={ List }/>
                    <Route exact path="/list" component={ List }/>                
                    <Route exact path="/extra" component={ Extra }/>                
                </Switch>
            </div>
            </div>
            </Router>
        )
    }

}

export default Header;


