import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'lib-flexible';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import HeaderIndex from './components/HeaderIndex.jsx';
import Sidebar from './components/Sidebar.jsx';
import List from './components/List.jsx';
import ListTheme from './components/ListTheme.jsx';

ReactDOM.render(
<div>
    <HeaderIndex />
    <Sidebar /> 
    <Router>  
        <Switch>       
            <Route path="/" component={ListTheme} />
            <Route path="/theme/:id" component={List} />
        </Switch> 
    </Router>
</div>, 
document.getElementById('root')
);
registerServiceWorker();
