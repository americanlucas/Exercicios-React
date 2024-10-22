import Botao from "../Botao"
import CampoTexto from "../CampoTexto"
import ListaSuspensa from "../ListaSuspensa"
import "./style.css"


const Formulario = () => {

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
        alert("O form foi validado")
    }

    const required =  true;
    return (
        <>
            <section className="section-formulario">
                <form onSubmit={aoSalvar}>
                    <h2>Preencha os dados para criar o card do colaborador.</h2>
                    <CampoTexto required label="Nome" placeholder="Digite o seu Nome" />
                    <CampoTexto required label="Cargo" placeholder="Digite o seu Cargo" />
                    <CampoTexto label="Imagem" placeholder="Digite o URL da Imagem aqui" />
                    <ListaSuspensa required label="Times" item={times}/>
                    <Botao>
                        Criar Card
                    </Botao>

                </form>
            </section>
        </>
    )
}

export default Formulario