import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { history } from './history';
import Home from './container/Home';
import TododApp from './component/todos/todoApp';
import StopWatchApp from './component/stopWatch/App';
import CreateAccount from './component/createAccount/index';
import GoogleMaps from './component/google/mapsAPP';
import Pagination from './component/Pagination/index';

export const App = () => {
    return (
        <div>
            <Router history={history}>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/todos' component={TododApp} />
                    <Route path='/stopwatch' component={StopWatchApp} />
                    <Route path='/GoogleMaps' component={GoogleMaps} />
                    <Route path="/createaccount" component={CreateAccount} />
                    <Route path='/Pagination' component={Pagination} />
                </Switch>
            </Router>
        </div>
    )
}