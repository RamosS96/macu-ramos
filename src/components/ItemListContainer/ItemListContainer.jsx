import ShopCart from "../Cards/ShopCart";
import Pantalon001 from "../../resources/img/Pantalon001.jpg";
import Pantalon002 from "../../resources/img/Pantalon002.jpg";
import Pantalon003 from "../../resources/img/Pantalon003.jpg";
import Pantalon004 from "../../resources/img/Pantalon004.jpg";

function ItemListContainer({ title }) {
    const productos = [
        {
            name: "Pantalon001",
            src: Pantalon001,
            stock:"5"
        },
        {
            name: "Pantalon002",
            src: Pantalon002,
            stock:"5"
        }, {
            name: "Pantalon003",
            src: Pantalon003,
            stock:"5"
        }, {
            name: "Pantalon004",
            src: Pantalon004,
            stock:"5"
        }
      ];
    return (
        <div>
            <h1>{title}</h1>
            <ShopCart stock="4" producto={productos[0] } />
            <ShopCart stock="4" producto={productos[1] } />
            <ShopCart stock="5" producto={productos[2] } />
            <ShopCart stock="4" producto={productos[3] } />
        </div>
    );
}

export default ItemListContainer;