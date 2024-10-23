import Colaborador from "../Colaborador"
import "./style.css"

const Time = (props) => {
    return (
        <> 
        <section className="section-time" style={{ backgroundColor: props.corSecundaria }}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>

            <div className="colaboradores">
                {props.colaboradores.map(colaborador => <Colaborador 
                    key={colaborador.nome}
                    nome={colaborador.nome} 
                    cargo={colaborador.cargo}
                    imagem={colaborador.imagem}
                    corPrimaria={props.corPrimaria}
                />)}
            </div>
            

        </section>
        
        </>
    )
}

export default Time