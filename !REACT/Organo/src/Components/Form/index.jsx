import { useState } from "react"
import Botao from "../Botao"
import CampoTexto from "../CampoTexto"
import ListaSuspensa from "../ListaSuspensa"
import "./style.css"


const Formulario = (props) => {

    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo, 
            imagem,
            time
        })
    }

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const required =  true;
    return (
        <>
            <section className="section-formulario">
                <form onSubmit={aoSalvar}>
                    <h2>Preencha os dados para criar o card do colaborador.</h2>
                    <CampoTexto 
                        required 
                        label="Nome" 
                        placeholder="Digite o seu Nome" 
                        valor={nome}
                        aoAlterado={valor => setNome(valor)}
                    />
                    <CampoTexto 
                        required 
                        label="Cargo" 
                        placeholder="Digite o seu Cargo" 
                        valor={cargo}
                        aoAlterado={valor => setCargo(valor)}
                    />
                    <CampoTexto 
                        label="Imagem" 
                        placeholder="Digite o URL da Imagem aqui" 
                        valor={imagem}
                        aoAlterado={valor => setImagem(valor)}
                    />
                    <ListaSuspensa 
                        required 
                        label="Times" 
                        item={times}
                        valor={time}
                        aoAlterado={valor => setTime(valor)}
                    />
                    <Botao>
                        Criar Card
                    </Botao>

                </form>
            </section>
        </>
    )
}

export default Formulario