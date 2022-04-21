import ShopCart from "../Cards/ShopCart";

function ItemListContainer({title, product1, product2}) {
    return (
        <div>
            <h1>{title}</h1>
            <ShopCart stock="4" item={product1} />
            <ShopCart stock="5" item={product2} />
        </div>
    );
}

export default ItemListContainer;