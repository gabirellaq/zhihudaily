import React from 'react';
import { Link } from 'react-router-dom';
import filter from '../util/filter.js';
import '../css/header.css';

class HeaderSecond extends React.Component {
    goBack() {
        window.history.back()
    }
    render() {
        return(
            <div className = "header-index header-second">
                <div onClick={this.goBack}><i className="iconfont icon-backicon"></i></div>
                <div>
                    <i className="iconfont icon-fenxiang"></i>
                    <i className="iconfont icon-shoucang"></i>
                    <Link to={`/comments/${this.props.header.id}/${this.props.header.comments}/${this.props.header.long_comments}/${this.props.header.short_comments}`}>
                        <i className="iconfont icon-pinglun"></i>
                        <span className="text">{this.props.header.short_comments}</span>
                    </Link>
                    <i className="iconfont icon-dianzan"></i>
                    <span className="text">{filter.toK(this.props.header.popularity)}</span>
                </div>
            </div>
        )
    }
}

export default HeaderSecond;