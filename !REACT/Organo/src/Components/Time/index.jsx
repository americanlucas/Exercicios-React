import Colaborador from "../Colaborador"
import "./style.css"

const Time = (props, {aoDeletar}) => {

    return (
        <> 
        <section className="section-time" style={{ backgroundColor: props.corSecundaria }}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>

            <div className="colaboradores">
                {props.colaboradores.map(colaborador => {

                    console.log(<Colaborador 
                        key={colaborador.nome}
                        nome={colaborador.nome} 
                        cargo={colaborador.cargo}
                        imagem={colaborador.imagem}
                        corPrimaria={props.corPrimaria}
                        aoDeletar={aoDeletar}
                    />)
                    
                    return <Colaborador 
                        key={colaborador.nome}
                        nome={colaborador.nome} 
                        cargo={colaborador.cargo}
                        imagem={colaborador.imagem}
                        corPrimaria={props.corPrimaria}
                        aoDeletar={aoDeletar}
                    />
                    })
                }
            </div>
            

        </section>
        
        </>
    )
}

export default Time