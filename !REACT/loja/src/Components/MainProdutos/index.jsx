import "./style.css"
import FIRST from "../../Assets/1st.jpg"
import SECOND from "../../Assets/3rd.jpg"
import THIRD from "../../Assets/6th.jpg"
import FORTH from "../../Assets/9th.jpg"
import { Link } from "react-router-dom";


export default function MainProdutos () {
    return (
        <>
            <section className="section-produtos">
                <div className="titulo-produtos">
                    <h1>LANÇAMENTOS.</h1>
                </div>

                <div className="container-box">
                    <div id="box1">
                        <img className="box-img" src={FIRST} alt="" />
                        <h2 className="box-titulo">Product 1</h2>
                        <h3 className="box-descricao">U$420.00</h3>
                    </div>

                    <div id="box2">
                        <img className="box-img" src={SECOND} alt="" /> 
                        <h2 className="box-titulo">Product 2</h2>
                        <h3 className="box-descricao">U$89.00</h3>
                    </div>
                        
                    <div id="box3">
                        <img className="box-img" src={THIRD} alt="" />
                        <h2 className="box-titulo">Product 3</h2>
                        <h3 className="box-descricao">U$ 320.00</h3>
                    </div>

                    <div id="box4">
                        <img className="box-img" src={FORTH} alt="" />
                        <h2 className="box-titulo">Product 4</h2>
                        <h3 className="box-descricao">U$ 119.00</h3>
                    </div>
                </div>

                <div className="butao">
                    <Link to="/Login">
                        <button>Mais.</button>
                    </Link>
                </div>
            </section>
        </>
    )
}