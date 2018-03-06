import React from 'react';
import superagent from '../util/superagent.js';
import CommentsItem from './CommentsItem.jsx';
import HeaderThird from './HeaderThird.jsx';
import '../css/comments.css';

class Comments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            long_comments: [],
            short_comments: [],
            commentsSum: 0,
            commentsShort:0,
            commentsLong:0
        }
    }
    componentDidMount() {
        let id = this.props.match.params.id;
        let shortNum = this.props.match.params.short;
        let longNum = this.props.match.params.long;
        let commentSum = this.props.match.params.sum;
        this.setState({
            commentsSum: commentSum,
            commentsShort: shortNum,
            commentsLong: longNum
        });
        //长评论
        superagent("get", "story/"+id+"/long-comments")
            .then(res => {
                this.setState({
                    long_comments: res.comments
                })
            });
        //短评论
        superagent("get", "story/"+id+"/short-comments")
            .then(res => {
                this.setState({
                    short_comments: res.comments
                })
            });
    }

    render() {
        let sum = parseInt(this.state.commentsSum, 0) +" 条评论";
        return(
            <div className="list-wrap comments-box">
                <HeaderThird name={sum}/>
                <h1 className="title">{this.state.commentsLong}条长评</h1>
                <CommentsItem longComments={this.state.long_comments} />
                <h1 className="title">{this.state.commentsShort}条短评</h1>
                <CommentsItem longComments={this.state.short_comments} />
            </div>
        )
    }
}

export default Comments;