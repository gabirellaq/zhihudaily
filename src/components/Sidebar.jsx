import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import superagent from '../util/superagent.js';
import emitter from '../util/event.js';
import '../css/sliderbar.css';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            themes: [],
            active: null
        }
    }

    componentDidMount() {
        superagent("get", "themes")
            .then(res => {
                this.setState({
                    themes: res.others
                })
            });
        this.eventEmitter = emitter.addListener("isShowsidebar", (active) => {
            this.setState({
                active
            })
        });
    }

    // 组件销毁前移除事件监听
    componentWillUnmount(){
        emitter.removeListener(this.eventEmitter);
    }

    toggleSidebar(active) {
        return () => {
            this.setState({
                active
            })
        }
    }
    render() {
        return(
            <div className="side">
                <div className ={ this.state.active ==='active' ?  "sidebar show-sidebar" : "sidebar"}>
                    <div className = "sidebar-header">
                        <div className="user">
                            <img src="https://avatars3.githubusercontent.com/u/5259501?s=460&v=4" alt="avatar" />
                            <span className="username">gabirellaq</span>
                        </div>
                        <div className="user-content">
                            <div>
                                <i className="iconfont icon-shoucang"></i>
                                <span>我的收藏</span>
                            </div>
                            <div>
                                <i className="iconfont icon-xiaoxi"></i>
                                <span>我的通知</span>
                            </div>
                        </div>
                    </div>
                    <div className = "sidebar-list">  
                        <Router>
                        <ul className="sidebar-list-ul">
                            <li className="sidebar-home" onClick={this.toggleSidebar('')}>
                                <Link to="/">
                                    <i className="iconfont icon-shouye"></i>
                                    <span>首页</span>
                                </Link>
                            </li>
                            {this.state.themes.map(item => 
                                <li key={item.id} onClick={this.toggleSidebar('')}>
                                    <Link to={`/theme?id=${item.id}`}>
                                        <span>{item.name}</span>
                                        <i className="iconfont icon-jia"></i>
                                    </Link>
                                </li>
                            )}
                        </ul>
                        </Router>
                    </div>
                </div>
                <div onClick={this.toggleSidebar('')} className={ this.state.active ==='active' ?  "sidebar-mask" : ""}></div>
            </div>
        )
    }
}

export default Sidebar;