import React, { useState } from "react";
import close from "../assets/closeIcon.svg"
import check from "../assets/checkCircular.svg"

const ModalForm = () => {

    const [ modal , setModal] = useState(1)

    return(
        <>
            {modal === 1 ? 
            (

                <div className="form-wrap">
                    <div className="form-close" onClick={()=>{setModal(0)}}>
                        <img src={close}  />
                    </div>
                    <div className="form-meta">
                        <img src={check} className="form-check" />
                        Metamask
                    </div>
                    <div className="form-title">Conectado con Mario Hernández</div>
                    <p className="form-txt">A continuación, te solicitamos los datos necesarios para acceder a los productos físicos a los que tienes derecho por tener tus NFT´s</p>
                    <button className="thirdBtn"
                    onClick={ ()=> { setModal(2)}}
                    >Dejar Mis datos</button>
                </div>

            ) 
            : modal === 2 ?
            (<div className="form-wrap form-wrap__data">
                <div className="form-close" onClick={()=>{setModal(0)}}>
                        <img src={close}  />
                </div>

                <div className="form-meta">
                        <img src={check} className="form-check" />
                        Metamask
                    </div>


                <div className="form-title">Información adicional</div>
                <p className="form-txt">Te contáctaremos para que puedas recibir tus productos.</p>
                <form>
                    <label>Nombre Y aplellido</label>
                    <input type="text" placeholder="Escribe tu nombre y apellido"/>
                    <div className="form-error">Campo obligatorio</div>
                    <label>Correo electrónico:</label>
                    <input type="text" placeholder="Escribe el correo electrónico"/>
                    <div className="form-error">Campo obligatorio</div>
                    <label>Celular:</label>
                    <input type="text" placeholder="Escribe el número de celular"/>
                    <div className="form-error">Campo obligatorio</div>
                    <button className="thirdBtn"
                    onClick={ ()=> { setModal(0)}}
                    >Enviar Mis datos</button>
                </form>
            </div>)
            :
            (<></>)
            }


           



        </>
    )
}

export default ModalForm