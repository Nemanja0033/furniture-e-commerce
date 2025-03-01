import { ArrowRight, ShoppingCart } from "lucide-react";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router";
import { useState } from "react";

interface ProductCardProps {
	img: string, 
	title: string,
	price: number,
	desc: string,
	wood_type: string,
	id: string
};

const ProductCard = ({img, title, price, desc, wood_type, id}: ProductCardProps) => {
	const [isHover, setIsHover] = useState(false);
	console.log(isHover)
	const { dispatch } = useCart();

	return(
		<div onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} className={`w-72 hover:opacity-80 translation-all cursor-pointer h-full rounded-md grid grid-col-1 shadow-md`}>
			<img className="h-72 w-full" src={img} alt={title} />
			<button onClick={dispatch({type: "ADD_ITEM", payload: id})} className={`rounded-lg relative ${isHover ? 'opacity-100' : 'opacity-0'} m-0 h-8 translition-all bottom-15 left-3 bg-white flex justify-center border-gray-300 border p-1 hover:bg-gray-100 cursor-pointer w-10`}><ShoppingCart /></button>
			<Link to={'/'} className="text-lg hover:underline text-start font-light px-5">{title}</Link>
			<div className="my-2 px-5 justify-start text-light text-gray-600 flex">
				<p>{desc}, {wood_type}</p>
			</div>
			<div className="flex px-5 mb-3 items-center justify-between">
				<span className="text-center font-mdeium text-lg">${price}</span>
				<Link className="flex gap-1 items-center text-sm font-light hover:right-2 hover:font-medium relative transition-all" to={'/'}>View Details <ArrowRight  size={16}/></Link>
			</div>
		</div>
	)
}

export default ProductCard;