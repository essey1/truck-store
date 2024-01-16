import { StoreItem } from "../components/StoreItem"
import storeItems from "../data/items.json"

export function Store() {
    return <section>
        <h1 className="section__title section__title--store">Toughness Meets Reliability in Every Truck!</h1>
        <div className="card-container">
            {storeItems.map(item => (
                <div key={item.id}>
                    <StoreItem {...item} />
                </div>
            ))}
            <div>

            </div>
        </div>
    </section>
}