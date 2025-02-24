import { Trash2 } from "lucide-react"

type ItemViewProps = {
    title: string,
    img: string,
    price: number,
    wood_type: string,
}

const ItemView = ({ title, img, price, wood_type}: ItemViewProps) => {
  return (
    <div className="w-full h-auto flex-row">
        <div className="flex justify-between">
            <div className="flex justify-start gap-2">
                <img className="w-32" src={img} alt={title} />
                <h1>{title}</h1>
            </div>
            <button><Trash2 size={18} /></button>
        </div>
        <span>{wood_type}</span>
        <span>{price}</span>
    </div>
  )
}

export default ItemView