import React from 'react';
import emitter from '../util/event.js';
import '../css/header.css';

class HeaderIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null || localStorage.getItem("name")
        }
    }

    toggleSidebar = (msg) => {
        return () => {
            emitter.emit("isShowsidebar", msg);
        }
    }

    componentDidMount() {        
        this.eventEmitter = emitter.addListener("isTitle", (name) => {
            this.setState({
                name
            })
        });
        localStorage.setItem("name", this.state.name);
    }

    componentDidUpdate(prevProps) {
        this.eventEmitter = emitter.addListener("isTitle", (name) => {
            this.setState({
                name
            })
        });
        localStorage.setItem("name", this.state.name);
    }

    // 组件销毁前移除事件监听
    componentWillUnmount(){
        emitter.removeListener(this.eventEmitter);
    }

    render() {
        return(
            <div className = "header-index">
                <div onClick={this.toggleSidebar('active')}><i className="iconfont icon-menu"></i></div>
                <div className="title">{this.state.name}</div>
                <div>
                    <i className="iconfont icon-xiaoxi"></i>
                    <i className="iconfont icon-morevert"></i>
                </div>
            </div>
        )
    }
}

export default HeaderIndex;