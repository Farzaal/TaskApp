import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import m1 from "./m1.jpg";
import m2 from "./m2.jpg";
import m3 from "./m3.jpg";
import m4 from "./m4.jpg";

class Extra extends Component {

    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows : true
        };

        return (
            <Slider {...settings} style={{'border':'1px solid black'}}>
                <div>
                    <img src={m1} width="100%" height="100%" />
                </div>
                <div>
                    <img src={m2}  width="100%" height="100%" />
                </div>
                <div>
                    <img src={m3}  width="100%" height="100%" />
                </div>
                <div>
                    <img src={m4}  width="100%" height="100%" />
                </div>
            </Slider>
        );
    }
}

export default Extra;