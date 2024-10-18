import "./style.css"
import { Link } from "react-router-dom";

export default function MainHome () {
    return (
        <>
            <section>
                <div className="main-texto">
                    <h1>LOJA.</h1>
                    <h3>A maior LOJA de LOJAS DO BRASIL!!</h3>
                </div>

                <div className="main-butao">
                    <Link to="/">
                        <button>Ver Produtos</button>
                    </Link>
                    
                </div>
            </section>
            
        </>
    )
}