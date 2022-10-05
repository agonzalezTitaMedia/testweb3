import React, { useState } from "react";

const Questions = () => {

    const [ numberQuestion, setNumberQuestion ] = useState(0);
    const clickQuestion = (number) =>{
        setNumberQuestion(number)
    }
    return(
        <>
            <div className="questions-wrapMain">
                <h3 className="questions-title">PREGUNTAS FRECUENTES</h3>
                
                <div className="questions-wrapMainQuestions">
                    <div className="questions-rowQuestions">
                        <div className="questions-topRow" onClick={()=>{clickQuestion(1)}}>
                            <div>¿Cómo funcionan los NFT’s?</div>
                            <span className="questions-downQuestion"></span>
                        </div>
                        <div className={ numberQuestion === 1 ? "questions-botRow show" : "questions-botRow" }>
                        Los NFT permiten a los usuarios poseer activos digitales como bienes raices virtuales, arte, ropa digital, momentos de video, etc. El concepto de los activos digitales es similar a las compras dentro de la aplicación de artículos en videojuegos. La gran diferencias de las NFT es su singularidad y la capacidad de transferirse fácilmente a otro propietario gracias a las tecnología blockchain.
                        </div>
                    </div>

                    <div className="questions-rowQuestions">
                        <div className="questions-topRow"  onClick={()=>{clickQuestion(2)}}>
                            <div>¿Qué es Blockchain?</div>
                            <span className="questions-downQuestion"></span>
                        </div>
                        <div className={ numberQuestion === 2 ? "questions-botRow show" : "questions-botRow" }>
                        Blockchain es una base de datos compartida e inmutable que facilita el proceso de registrar transacciones y rastrear activos en un foro públicamente transparente. En pocas palabras, es un registro en línea de transacciones. La manera de interactuar con Blockchain es mediante billeteras digitales.
                        </div>
                    </div>

                    <div className="questions-rowQuestions">
                        <div className="questions-topRow"  onClick={()=>{clickQuestion(3)}}>
                            <div>¿Qué es una billetera digital?</div>
                            <span className="questions-downQuestion"></span>
                        </div>
                        <div className={ numberQuestion === 3 ? "questions-botRow show" : "questions-botRow" }>
                        Una billetera digital es un repositorio personal donde guardamos nuestros activos digitales como criptomonedas y NFT’s . Para descargar e instalar tu billetera haz click aquí https://metamask.io .
                        </div>
                    </div>

                    <div className="questions-rowQuestions">
                        <div className="questions-topRow"  onClick={()=>{clickQuestion(4)}}>
                            <div>¿Cómo comprar un NFT?</div>
                            <span className="questions-downQuestion"></span>
                        </div>
                        <div className={ numberQuestion === 4 ? "questions-botRow show" : "questions-botRow" }>
                        Los NFT se compran con criptomonedas o con tarjetas de crédito en marketplaces que hay en la red, en este caso estamos en Opensea. Los NFT´S quedan almacenados en las billeteras digitales de blockchain de sus dueños.
                        </div>
                    </div>

                    <div className="questions-rowQuestions">
                        <div className="questions-topRow"  onClick={()=>{clickQuestion(5)}}>
                            <div>¿De qué me sirve tener un NFT de Mario Hernández?</div>
                            <span className="questions-downQuestion"></span>
                        </div>
                        <div className={ numberQuestion === 5 ? "questions-botRow show" : "questions-botRow" }>
                        La colección de Oro Azul de Mario Hernández es la primera de NFT´s  de una casa de lujo colombiana con 165 piezas digitales exclusivas hechas 1 a1 por Lorenzo Hernández, director creativo de la marca e hijo del fundador Mario Hernández. Tener un NFT es la puerta de acceso a una serie de beneficios en la marca incluyendo productos de edición limitada de Mario Hernández, servicio preferencial, y pertenencia exclusiva dentro de la marca.
                        </div>
                    </div>

                </div>
            </div>
            
        </>
    )
}

export default Questions