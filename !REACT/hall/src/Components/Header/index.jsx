import { Link } from "react-router-dom"
import "./style.css"

const Header = (props) => {

    return (
        <>
        <section className="section-header">
            <div className="titulo">
                <h1>
                    <Link to="/">
                        {props.tituloHeader}
                    </Link>
                </h1>
            </div>

            <div className="topicos">
                <Link><h2>{props.v1}</h2></Link>
                <Link><h2>{props.v2}</h2></Link>
                <Link><h2>{props.v3}</h2></Link>           
            </div>
        </section>
        
        
        </>
    )
}

export default Header