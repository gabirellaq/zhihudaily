import React from 'react';
//import { BrowserRouter as Router, Link } from 'react-router-dom';
import superagent from '../util/superagent.js';
import Slider from './Slider.jsx';
import ListItem from './ListItem.jsx';

class ListTheme extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stories: [],
            image: []
        }
        
    }
    componentDidMount() {
        let id = this.props.location.search.substring(4);
        console.log(id);
        superagent("get", "theme/"+id)
            .then(res => {
                let imgArr = [
                    {
                        "image": res.background,
                        "title": res.description,
                        "id": 0
                    }
                ];
                this.setState({
                    stories: res.stories,
                    image: imgArr
                })
            });
    }

    render() {
        return(
            <div className="list-wrap">
                <Slider slider={this.state.image}></Slider>
                <ul>
                    {this.state.stories.map(subitem =>
                        <ListItem key={subitem.id} item={subitem}></ListItem>
                    )}
                </ul>
            </div>
        )
    }
}

export default ListTheme;