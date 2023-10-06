import { NavLink } from "react-router-dom"

export function Navbar() {
    return <div className="nav">
        <div className="nav__logo">
            Logo
            <img src="#" alt="" />
        </div>
        <button className="nav__toggle" aria-label="toggle navigation">
            <span className="hamburger"></span>
        </button>
        <div className="nav__cart">
            Cart
            <img src="#" alt="" />
            <div className="nav__cart--circle">0 </div>
        </div>
        <nav className="nav">
            <NavLink to={"/"} className="nav__link">Home</NavLink>
            <NavLink to={"/store"} className="nav__link">Store</NavLink>
            <NavLink to={"/about"} className="nav__link">About</NavLink>
        </nav>
    </div>
}