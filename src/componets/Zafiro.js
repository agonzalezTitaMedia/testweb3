import React from "react";
import MainBtn from "./MainBtn";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import "../../node_modules/slick-carousel/slick/slick.css";
import Slider from "react-slick";
import Card from "./Card";
import overblur from "../assets/over-blur.png"

const Zafiro = () => {
    
        const settings = {
            centerMode: true,
            centerPadding: '60px',
            autoplay:true,    
            slidesToShow: 1.6,
            arrows:false,
            responsive:[
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow:1
                    }
                }
            ]
        };

    return (
        <div className="slide-wrap slide-wrap--zafiro" id="zafiro">
            <div className="slide-col slide-col--blur">
                <img src={overblur} alt="El mundo de los nft" className="slide--overblur"></img>
                <Slider {...settings} className="slide-wrapSlider">
                    <div>
                        <Card/>
                    </div>
                    <div>
                        <Card/>
                    </div>
                    <div>
                        <Card/>
                    </div>
                </Slider>
            </div>
            <div className="slide-col">
                <div className="slide-subTitle">Colección</div>
                <div className="slide-WrapCircle">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <h2 className="slide-title">ZAFIRO</h2>
                
                <MainBtn text={'ver NFTS en Opensea'}></MainBtn>

                <a className="slide-beneficiosTxt"> 
                <span className="slide-beneficiosIcon"></span> 
                Ver Beneficios</a>
            </div>
        </div>
    )
}

export default Zafiro