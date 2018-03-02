import React from 'react';
//import { BrowserRouter as Router, Link } from 'react-router-dom';
import '../css/listItem.css';

class ListItem extends React.Component {
    render() {
        const item = this.props.item;
        return(
            <li className="list-item-li">
                <a>
                    <span className="text">
                        {item.title}
                    </span>
                    {(() => {
                        if(item.images) {
                            return (
                                <span className="img">
                                    <img src={item.images} alt="" />
                                    {(() => {
                                        if(item.multipic) {
                                            return (
                                                <span className="tip">
                                                    <i className="iconfont">&#xe61c;</i> 多图
                                                </span>
                                            )
                                        }
                                    })()}
                                </span>
                            )
                        }
                    })()}
                    
                </a>
            </li>
        )
    }
}

export default ListItem;