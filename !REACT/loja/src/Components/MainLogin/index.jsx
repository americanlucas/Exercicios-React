import { Link } from "react-router-dom";
import "./style.css"

export default function MainLogin () {
    return (
        <>
            <section className="section-login">
                <div className="titulo-login">
                    <h2>É necessário estar logado.</h2>
                </div>

                <div className="container-box-login">
                    <div className="input-login">
                        <input type="text" placeholder="Nome." />
                        <input type="text" placeholder="Usuário." />
                        <input type="text" placeholder="Email."/>
                    </div>

                    <div className="butao-login">
                        <Link to="/">
                            <button>Registrar.</button>
                        </Link>
                    </div>
                    
                </div>
            </section>
        </>
    )
}