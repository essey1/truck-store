import { Offcanvas } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import storeItems from "../data/items.json"
import { CartItem } from "./CartItem"
import { formatCurrency } from "../utilities/formatCurrency"

type ShoppingCartProps = {
    isOpen: boolean
}

interface ShoppingCart {
    closeCart: () => void
    cartItems: CartItem[]
}

type CartItem = {
    id: number
    quantity: number
}

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
    const { closeCart, cartItems } = useShoppingCart() as ShoppingCart
    return (
        <Offcanvas show={isOpen} onHide={closeCart} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                {cartItems.map(item => (
                <CartItem key={item.id} {...item} />
                ))}
                <div className="cart__totalp">
                    Total: 
                    {formatCurrency(
                        cartItems.reduce((total, cartItem) =>{
                            const item = storeItems.find(i => i.id === cartItem.id)
                            return total + (item?.price || 0) * cartItem.quantity
                        }, 0)
                    )}
                </div>
            </Offcanvas.Body>
        </Offcanvas>
    )
}