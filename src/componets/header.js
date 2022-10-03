import React from "react";

const Header = ({connected,onConnect, disConnect}) => {
    

    
    return(
        <header className="header-wrap">
            <h1 className="header-logo">Mario Hernadez</h1>
            


            {connected ? 
                <>
                <button className="header-btnWallet" 
                    onClick={()=>{disConnect()}}> 
                    <span className="header-iconWallet"></span> 
                    Desconectar
                </button>
                </>
            : <>
                <div className="header-wrapWallet">
                    <button className="header-btnWallet" 
                        onClick={()=>{onConnect()}}> 
                        <span className="header-iconWallet"></span> 
                        Conectar Billetera
                    </button>

                    <button className="header-questions">
                        <div className="header-questIcon"></div> 
                        <div className="header-questTxt">¿Dudas?</div>
                    </button>
                </div>
                
            </> }

           
        </header>
    )
}


export default Header