import { NavLink } from "react-router-dom"
const Header = () => {
    const navLinkStyles = ({ isActive }) => {
        return {
            textDecoration: isActive ? 'underline' : 'none'
        }
    }

    return (
        <>
            <header className="
                flex 
                justify-between
                items-center
                my-4
                mx-8
                text-2xl
                font-bold
                font-mono
                text-white
                "
            >
                <div className="font-bold ">
                    <NavLink style={navLinkStyles} to={"/"}>
                        <h1>American Lucas</h1>
                    </NavLink>
                </div>
                <div className="flex flex-row gap-4">
                    <NavLink style={navLinkStyles} to={"/about"}>
                        <h3>About</h3>
                    </NavLink>
                    <NavLink style={navLinkStyles} to={"/work"}>
                        <h3>My Work</h3>
                    </NavLink>
                    <NavLink style={navLinkStyles} to={"/projects"}>
                        <h3>Projects</h3>
                    </NavLink>
                </div>
                <div>
                    <NavLink style={navLinkStyles} to={"/contact"}>
                        <h1>Contact Me</h1>
                    </NavLink>
                </div>
            </header>
        </>
    )
}

export default Header