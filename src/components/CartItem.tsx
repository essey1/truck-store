import { useShoppingCart } from "../context/ShoppingCartContext"
import storeItems from "../data/items.json"
import { formatCurrency } from "../utilities/formatCurrency"

type CartItemProps = {
    id: number
    quantity: number
}

interface ShoppingCart {
    removeFromCart: (id: number) => void;
}

export function CartItem({ id, quantity }: CartItemProps) {
    const { removeFromCart } = useShoppingCart() as ShoppingCart
    const item = storeItems.find(i => i.id === id)
    if (item == null) return null

    return (
        <div className="cart__item">
            <img src={item.imgUrl}></img>
            <div className="cart__item--name">
                {item.name}
                {quantity > 1 && <span>x{quantity}</span>}
            </div>
            <div className="cart__item--price">
                {formatCurrency(item.price)}
            </div>
            <div className="cart__item--totalp">
                {formatCurrency(item.price *quantity)}
            </div>
            <button className="cart__item--remove"
            onClick={() => removeFromCart(item.id)}>
                &times;
            </button>
        </div>
    )
}