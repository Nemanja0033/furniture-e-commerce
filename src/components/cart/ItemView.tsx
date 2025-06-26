import { Trash2 } from "lucide-react"
import { useCart } from "../../context/CartContext"

type ItemViewProps = {
    title: string,
    img: string,
    price: number,
    wood_type: string,
    id: string,
    amount: number
}

const ItemView = ({ title, img, price, wood_type, id, amount}: ItemViewProps) => {
    const { dispatch } = useCart();

  return (
    <div className="w-full h-auto flex-row px-5 mt-5">
        <div className="flex justify-between mb-3">
            <div className="flex justify-start items-start gap-2">
                <img className="w-28 rounded-xl" src={img} alt={title} />
                <div className="flex-row">
                <h1>{title}</h1>
                <p className="text-gray-500 font-light">{wood_type}</p>
                <div className="flex gap-2 items-center">
                    <button className="bg-gray-100 hover:bg-gray-200 transition-all cursor-pointer rounded-md w-7 h-7 flex justify-center items-center" onClick={() => dispatch({type: "DECREMENT", payload: id})}>-</button>
                    <span className="bg-white w-7 h-7 flex justify-center items-center">{amount}</span>
                    <button className="bg-gray-100 hover:bg-gray-200 transition-all cursor-pointer rounded-md w-7 h-7 flex justify-center items-center" onClick={() => dispatch({type: "INCREMENT", payload: id})}>+</button>
                </div>
                <p className="mt-3">${price}</p>
                </div>
            </div>
            <div className="flex items-start">
                <button className="cursor-pointer" onClick={() => dispatch({type:"REMOVE_ITEM", payload: id})}><Trash2 size={18} /></button>
            </div>
        </div>
        <hr className="text-gray-300" />
    </div>
  )
}

export default ItemView