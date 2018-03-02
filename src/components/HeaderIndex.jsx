import React from 'react';
import emitter from '../util/event.js';
import '../css/header.css';

class HeaderIndex extends React.Component {

    toggleSidebar = (msg) => {
        return () => {
            emitter.emit("isShowsidebar", msg);
        }
    }
    render() {
        return(
            <div className = "header-index">
                <div onClick={this.toggleSidebar('active')}><i className="iconfont icon-menu"></i></div>
                <div className="title">首页</div>
                <div>
                    <i className="iconfont icon-xiaoxi"></i>
                    <i className="iconfont icon-morevert"></i>
                </div>
            </div>
        )
    }
}

export default HeaderIndex;