import { useNavigate } from "react-router-dom"
import Github from "../../assets/github.svg"
import Instagram from "../../assets/instagram.svg"
import Mail from "../../assets/mail.svg"
import Pin from "../../assets/pin.svg"
const Main = () => {
    const navegar = useNavigate();
    return (
        <>
            <main className="flex my-24 mx-auto flex-col bg-slate-800 text-white rounded-lg p-4 max-w-3xl">
                <div className="flex flex-row align-center mx-4 mb-12 justify-between ">
                    <h1 className="flex my-auto mx-2 text-4xl font-semibold">Lucas Americano</h1>
                    <div className="flex flex-row ">
                        <button className="bg-white rounded-md p-1 m-2">
                            <img className="w-12 h-12 text-black" src={Github} alt="" />
                        </button>
                        <button className="bg-white rounded-md p-1 m-2" >
                            <img src={Instagram} alt="" />
                        </button>
                        <button className="bg-white rounded-md p-1 m-2" >
                            <img src={Mail} alt="" />
                        </button>
                    </div>
                </div>
                <div className="flex flex-row gap-2 mx-6 text-lg">
                    <h2>I'm 21 year old Front-End Web Developer. I have been programming for more than 1 year. I create professional websites.</h2>
                </div>
            </main>
        </>
    )
}

export default Main