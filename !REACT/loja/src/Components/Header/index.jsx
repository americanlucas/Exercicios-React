import { Link } from "react-router-dom";
import "./style.css"

export default function Header (){
    return  (
        <>

            
            <header>
                <div className="cabecalho-titulo">
                    <Link to="/">
                        <h1>LOJA.</h1> 
                    </Link>
                   
                </div>
                
                <div className="cabecalho-links">
                    <Link to="/">
                        <h2>Produtos.</h2>
                    </Link>

                    <Link to="/">
                        <h2>Sobre.</h2>
                    </Link>

                    <Link to="/">
                        <h2>Login.</h2>
                    </Link>
                    
                    
                </div>

            </header>
        </>
    )
}