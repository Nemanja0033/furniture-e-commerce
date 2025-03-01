import { ArrowRight } from "lucide-react";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router";

interface ProductCardProps {
	img: string, 
	title: string,
	price: number,
	desc: string,
	wood_type: string
};

const ProductCard = ({img, title, price, desc, wood_type}: ProductCardProps) => {
	const { dispatch } = useCart();

	return(
		<div className="w-72 hover:opacity-80 translation-all cursor-pointer h-full rounded-md grid grid-col-1 shadow-md">
			<img className="h-72 w-full" src={img} alt={title} />
			<Link to={'/'} className="text-lg mt-1 hover:underline text-start font-light px-5">{title}</Link>
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