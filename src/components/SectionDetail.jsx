import React from 'react';
import superagent from '../util/superagent.js';
import HeaderThird from './HeaderThird.jsx';
import ListItem from './ListItem.jsx';

class SectionDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stories: [],
            name:''
        }
    }

    getSectionDetailData(id) { 
        //新闻详细内容    
        superagent("get", "section/"+id)
           .then(res => {
               this.setState({
                    stories: res.stories,
                    name: res.name
               })
           });
   }

    componentDidMount() {
        let id = this.props.match.params.id;
        this.getSectionDetailData(id);
    }
    render() {
        return(
            <div className="list-wrap hasHeaderSecond">
                <HeaderThird name={this.state.name} />
                <ul>
                    {this.state.stories.map(subitem =>
                        <ListItem key={subitem.id} item={subitem}></ListItem>
                    )}
                </ul>
            </div>
        )
    }
}

export default SectionDetail;