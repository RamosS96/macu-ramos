import { useParams } from "react-router-dom";
import ShopCart from "../../components/Cards/ShopCart";
import Pantalon001 from "../../resources/img/Pantalon001.jpg";
import Pantalon002 from "../../resources/img/Pantalon002.jpg";
import Pantalon003 from "../../resources/img/Pantalon003.jpg";
import Pantalon004 from "../../resources/img/Pantalon004.jpg";

function ItemListContainer({ title }) {
    const productos = [
        {
            name: "Pantalon001",
            src: Pantalon001,
            stock:"5",
            id: "001",
            description: "Pantalon"
        },
        {
            name: "Pantalon002",
            src: Pantalon002,
            stock:"5",
            id: "002",
            description: "Pantalon"
        }, {
            name: "Pantalon003",
            src: Pantalon003,
            stock:"5",
            id: "003",
            description: "Pantalon"
        }, {
            name: "Pantalon004",
            src: Pantalon004,
            stock:"5",
            id: "004",
            description: "Pantalon"
        }
      ];

const {categoryID} = useParams();
      console.log(categoryID);

    return (
        <div>
            <h1>{title} ({productos.length}) </h1>
            {productos.map((u) => <ShopCart producto={u.name} key={u.id} stock={u.stock} src={u.src} all={u}/>)}
        </div>
    );
}

export default ItemListContainer;