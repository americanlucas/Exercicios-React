import ImagemBanner from "../../Assets/banner.png"
import "./style.css"

function Banner () {
    return (
        <>
            <section className="section-banner">
                <img src={ImagemBanner} alt="" />
            </section>
        </>
    )
}

export default Banner