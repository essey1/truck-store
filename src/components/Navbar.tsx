import { NavLink } from "react-router-dom"
import { useShoppingCart } from "../context/ShoppingCartContext"

interface ShoppingCart {
    openCart: () => void
    cartQuantity: number
}

export function Navbar() {
    const { openCart, cartQuantity } = useShoppingCart() as ShoppingCart
    return <div className="nav">
        {/* <div className="nav__logo">
            <img src="img/favicon.png" alt="logo" />
        </div> */}
        <nav className="nav__list">
            <NavLink to={"/"} className="nav__link">Home</NavLink>
            <NavLink to={"/store"} className="nav__link">Store</NavLink>
            <NavLink to={"/about"} className="nav__link">About</NavLink>
        </nav>
        {/* <button className="nav__toggle" aria-label="toggle navigation">
            <span className="hamburger"></span>
        </button> */}
        {cartQuantity > 0 &&(
            <div className="nav__cart" onClick={openCart}>
                <img src="img/cart.png" alt="" />
                <div className="nav__cart--circle">{cartQuantity}</div>
            </div>
        )}
    </div>
}