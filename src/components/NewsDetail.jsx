import React from 'react';
import { Link } from 'react-router-dom';
import superagent from '../util/superagent.js';
import Slider from './Slider.jsx';
import filter from '../util/filter.js';

class NewsDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: '',
            image: [],
            section: {}
        }
    }

    toBody() {
        let html = this.state.body;
        if(html) {            
            html = html.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p');
        }
        return {
          __html: html 
        }
    }

    getNewsDetailData(id) {     
        superagent("get", "news/"+id)
           .then(res => {
               let imgArr = [
                    {
                        "image": res.image || '',
                        "title": res.title,
                        "id": res.id || 0
                    }
               ];
               this.setState({
                   body: res.body,
                   image: imgArr,
                   section: res.section || ''
               })
           });
   }

    componentDidMount() {
        let id = this.props.match.params.id;
        this.getNewsDetailData(id);
    }
    render() {
        let section = this.state.section;
        return(
            <div className="list-wrap">
                <Slider slider={this.state.image}></Slider>
                <div className="newsContent" dangerouslySetInnerHTML={this.toBody()}></div>
                {(()=>{
                    if(section.name) {
                        return (
                            <div className="section-box">
                                <Link to={`/section/${section.id}`}>
                                    <img src={filter.replaceUrl(section.thumbnail)} alt=""/>
                                    <span className="sectionName">本文来自: {section.name} · 合集</span>
                                    <span className="arrow"></span>
                                </Link>
                            </div>
                        )
                    }
                })()}
            </div>
        )
    }
}

export default NewsDetail;