import { StoreItem } from "../components/StoreItem"
import storeItems from "../data/items.json"

export function Store() {
    return <>
        <h1>Store</h1>
        <div>
            {storeItems.map(item => (
                <div key={item.id}>
                    <StoreItem {...item} />
                </div>
            ))}
            <div>

            </div>
        </div>
    </>
}