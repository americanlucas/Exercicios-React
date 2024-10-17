import "./style.css"
import Faz_o_L from "../Main"
import Direita from "../Login"

export default function View() {
    return (
        <>
            <main id="boxs">
                <Faz_o_L/>
                <Direita/>
            </main>
            <main id="botao">
                <button><h1>Enviar</h1></button>
                <h4>Já tem conta? <a href="">Login</a></h4>
            </main>
        </>
    )
}