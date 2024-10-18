import "./style.css"
import { Link } from "react-router-dom";
import github from "../../Assets/logo/Github.png"
import instagram from "../../Assets/logo/Instagram.png"
import linkedin from "../../Assets/logo/Linkedin.png"
import twitter from "../../Assets/logo/Twitter.png"

export default function MainSobre (){
    return (
        <>
            <section className="section-sobre">
                <div className="titulo-sobre">
                    <Link to="/">
                        <h1>LOJA.</h1>
                    </Link>
                    
                </div>

                <div className="block-topicos">
                    <div className="block1">
                        <div className="topico1">
                            <h2>Sobre Nós.</h2>
                            <p>Bem-vindo à LOJA, onde a moda encontra a originalidade e o estilo pessoal é elevado a um novo patamar. Somos mais do que apenas uma marca de roupas - somos um espaço para expressão individual, criatividade e ousadia. Nossa missão é oferecer peças exclusivas e de alta qualidade que falem por si mesmas, permitindo que nossos clientes não apenas sigam tendências, mas criem suas próprias.</p> 
                        </div>

                        <div className="topico2">
                            <h2>Nossa Visão.</h2>
                            <p>Criar uma comunidade de pessoas que valorizam o autêntico e o inusitado, desafiando o convencional e quebrando barreiras no mundo da moda. Queremos ser mais do que uma loja de roupas - nosso objetivo é ser uma plataforma onde o estilo pessoal seja celebrado em sua forma mais pura.</p>
                        </div>

                    </div>

                    <div className="block2">
                        <div className="topico3">
                            <h2>Nossa Qualidade.</h2>
                            <p>Cada peça disponível na LOJA é feita com materiais de alta qualidade e passa por um rigoroso controle de produção. Trabalhamos com designers e marcas que compartilham nosso compromisso com a inovação e o cuidado nos detalhes, garantindo que você receba produtos únicos e duráveis.</p>
                        </div>

                        <div className="topico4">
                            <Link to="/Login">
                                <h2>Junte-se à nós.</h2>
                            </Link>
                            
                            <p>Não importa se você está procurando renovar seu guarda-roupa ou adicionar peças ousadas e exclusivas à sua coleção, a LOJA está aqui para oferecer exatamente o que você precisa. Junte-se à nossa comunidade de visionários e criadores de tendências e vista-se para se destacar, não para se encaixar.</p>
                        </div>

                    </div>

                </div>

                <div className="contato">
                    <h2>Contato</h2>
                    <div className="contato-img">
                        <Link to="https://github.com/americanlucas" target="_blank"><img src={github} alt="" />
                        </Link>

                        <Link to="https://www.instagram.com/americanwrldd" target="_blank"><img src={instagram} alt="" /></Link>

                        <Link to="https://www.linkedin.com/in/lucas-americano-529239236/" target="_blank"><img src={linkedin} alt="" /></Link>

                        <Link to="https://www.x.com/americanwrld" target="_blank"><img src={twitter} alt="" /></Link>
                    </div>
                </div>
            </section>
        </>
    )
}