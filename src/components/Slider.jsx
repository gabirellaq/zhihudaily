import React from 'react';
//import { BrowserRouter as Router, Link } from 'react-router-dom';
import '../css/slider.css';
import filter from '../util/filter.js';
import Swiper from 'swiper';
window.Swiper = Swiper;

class Slider extends React.Component {
    componentDidMount () {
        new window.Swiper('.swiper-container', {
            pagination: {
                el: '.swiper-pagination'
            },
            paginationClickable: true,
            spaceBetween: 0,
            centeredSlides: true,
            autoplay: {
                delay: 4000
            },
            autoplayDisableOnInteraction: false,
            observer: true,
            lazyLoading: true,
            resistanceRatio: 0
        })
    }
    render() {
        const slider = this.props.slider;
        return(
            <div className="slider">
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        {slider.map(item=>
                            <div key={item.id} className="swiper-slide" style={{backgroundImage: 'url(' + filter.replaceUrl(item.image) + ')' }} >
                                <div className="swiper-mask"></div>
                                <h1 className="slider-title">{item.title}</h1>
                                
                            </div>
                        )}
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        )
    }
}

export default Slider;