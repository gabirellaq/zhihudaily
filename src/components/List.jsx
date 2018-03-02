import React from 'react';
//import { BrowserRouter as Router, Link } from 'react-router-dom';
import superagent from '../util/superagent.js';
import Slider from './Slider.jsx';
import ListItem from './ListItem.jsx';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            news_latest: [],
            top_stories: []
        }
    }
    componentDidMount() {
        superagent("get", "news/latest")
            .then(res => {
                this.setState({
                    news_latest: res.stories,
                    top_stories: res.top_stories
                })
            });
    }
    toggleSidebar() {

    }
    render() {
        return(
            <div className="list-wrap">
                <Slider slider={this.state.top_stories}></Slider>
                <ul>
                    {this.state.news_latest.map(subitem =>
                        <ListItem key={subitem.id} item={subitem}></ListItem>
                    )}
                </ul>
            </div>
        )
    }
}

export default List;