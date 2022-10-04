import React from "react";
import MainBtn from "./MainBtn";
import butterfly from '../assets/butterfly.png';

const Definition = () => {
    return (
        <>
            <div className="definition-wrap">
                <div className="definition-rowTop">
                    <img src={butterfly} alt='nft Mario Hernandez' className="definition-butterfly" />
                    <h3 className="definition-title">¿Qué son los NFT´s?</h3>
                    <p className="definition-txt definition-txt__subTitle">
                    Un NFT (token no fungible) es una unidad de datos única y no intercambiable almacenada
en una base de datos digital.
Los tokens no fungibles pueden tomar la forma de música, fotos y cualquier otro
coleccionable digital, incluidos libros, blogs o incluso tweets. Los NFT son básicamente
archivos digitales autenticados o registrados. Los tokens no fungibles se pueden compartir y
consumir, pero no duplicar, lo que crea escasez digital y prueba de propiedad.
                        </p>
                    <MainBtn text={'Ver Video'}/>
                </div>

                <div className="definition-bottomRow">
                    <h4 className="definition-subTitle">¿Cómo puedo obtener los NFT´s?</h4>
                    <div className="definition-wrapColBottom">

                        <div className="definition-colInfo">
                            <div className="defintion-titleStep">Paso 1</div>
                            <p className="definition-txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. </p>
                        </div>
                        <div className="definition-colInfo">
                            <div className="defintion-titleStep">Paso 2</div>
                            <p className="definition-txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. </p>
                        </div>
                        <div className="definition-colInfo">
                            <div className="defintion-titleStep">Paso 3</div>
                            <p className="definition-txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. </p>
                        </div>
                        <div className="definition-colInfo">
                            <div className="defintion-titleStep">Paso 4</div>
                            <p className="definition-txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. </p>
                        </div>
                        <div className="definition-colInfo">
                            <div className="defintion-titleStep">Paso 5</div>
                            <p className="definition-txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. </p>
                        </div>

                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Definition