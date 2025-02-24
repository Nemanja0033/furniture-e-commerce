import { Trash2 } from "lucide-react"
import { useCart } from "../../context/CartContext"

type ItemViewProps = {
    title: string,
    img: string,
    price: number,
    wood_type: string,
    id: string
}

const ItemView = ({ title, img, price, wood_type, id}: ItemViewProps) => {
    const { dispatch } = useCart();

  return (
    <div className="w-full h-auto flex-row">
        <div className="flex justify-between">
            <div className="flex justify-start gap-2">
                <img className="w-32" src={img} alt={title} />
                <h1>{title}</h1>
            </div>
            <button onClick={() => dispatch({type:"REMOVE_ITEM", payload: id})}><Trash2 size={18} /></button>
        </div>
        <span>{wood_type}</span>
        <span>{price}</span>
    </div>
  )
}

export default ItemView