import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency"

interface ShoppingCart {
    getItemQuantity: (id: number) => number;
    increaseCartQuantity: (id: number) => void;
    decreaseCartQuantity: (id: number) => void;
    removeFromCart: (id: number) => void;
  }

type StoreItemProps = {
    id: number;
    name: string;
    price: number;
    imgUrl: string;
};
  
export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
    const {
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
    } = useShoppingCart() as ShoppingCart
    const quantity = getItemQuantity(id)
    
    return <div className="card">
        <img src={imgUrl} className="card__img" alt="" />
        <div className="card__title">{name}</div>
        <div className="card__price">{formatCurrency(price)}</div>
        <div className="card__cart">
            {quantity === 0 ? (
                <button className="card__cart--button" onClick={() => increaseCartQuantity(id)}>+ Add To Cart</button>
            ): (<div className="card__cart--counter">
                <button onClick={() => decreaseCartQuantity(id)}>-</button>
                <div className="card__cart--quantity">
                    <span>{quantity}</span>in cart
                </div>
                <button onClick={() => increaseCartQuantity(id)}>+</button>
                <button className="card__cart--remove" onClick={() => removeFromCart(id)}>Remove</button>
            </div> )}
        </div>
    </div>
}