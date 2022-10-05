import React from "react";
import MainBtn from "./MainBtn";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import "../../node_modules/slick-carousel/slick/slick.css";
import Slider from "react-slick";
import Card from "./Card";
import overblur from "../assets/exclusividad-digital.png"


const Indigo = () =>{

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



    return(
        <div className="slide-wrap slide-wrap--indigo" id="indigo">
            <div className="slide-col">
            <div className="slide-subTitle">Colección</div>
                    <div className="slide-WrapCircle">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <h2 className="slide-title">Indigo</h2>
                    <MainBtn text={'ver NFTS en Opensea'}></MainBtn>
                    <a className="slide-beneficiosTxt"> 
                    <span className="slide-beneficiosIcon"></span> 
                Ver Beneficios</a>
            </div>
            <div className="slide-col">
                    <img src={overblur} alt="El mundo de los nft" className="slide--overblur"></img>
                    <Slider {...settings} className="slide-wrapSlider">
                        <div>
                            <Card />
                        </div>
                        <div>
                            <Card />
                        </div>
                        <div>
                            <Card />
                        </div>
                    </Slider>
            </div>
        </div>
    )
}

export default Indigo