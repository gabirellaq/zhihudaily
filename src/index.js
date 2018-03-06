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
import SectionDetail from './components/SectionDetail.jsx';
import Comments from './components/Comments.jsx';


ReactDOM.render(
<Router>
    <div>
        <HeaderIndex />
        <Sidebar />        
        <Route exact path="/" component={List} />
        <Route path="/theme/:id" component={ListTheme} />
        <Route path="/news/:id" component={NewsDetail} />
        <Route path="/section/:id" component={SectionDetail} />
        <Route path="/comments/:id/:sum/:long/:short" component={Comments} />
    </div>
</Router>,
document.getElementById('root')
);
registerServiceWorker();
