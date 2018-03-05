import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'lib-flexible';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import HeaderIndex from './components/HeaderIndex.jsx';
import Sidebar from './components/Sidebar.jsx';
import List from './components/List.jsx';
import ListTheme from './components/ListTheme.jsx';
import NewsDetail from './components/NewsDetail.jsx';


ReactDOM.render(
<Router>
    <div>
        <HeaderIndex />
        <Sidebar />        
        <Route exact path="/" component={List} />
        <Route path="/theme/:id" component={ListTheme} />
        <Route path="/news/:id" component={NewsDetail} />
    </div>
</Router>,
document.getElementById('root')
);
registerServiceWorker();
