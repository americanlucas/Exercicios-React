import './style.css'

export default function Box () {
    return (
    <>
        
        <section class="caixa-cadastro">
            <h1>LOGIN</h1>
            <div class="textbox">
                <input type="text" placeholder="Usuário" />
                <input type="text" placeholder="Senha" />
                <div className="btn">
                    <a href="" id="btn"><button>ENVIAR</button></a>
                </div>
            </div>
        </section>
    </>
    )
}