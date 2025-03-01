import { ArrowRight } from "lucide-react";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router";

interface ProductCardProps {
	img: string, 
	title: string,
	price: number
}

const ProductCard = ({img, title, price}: ProductCardProps) => {
	const { dispatch } = useCart();

	return(
		<div className="md:w-[100%] w-[90%] hover:opacity-80 translation-all cursor-pointer h-[400px] rounded-md grid grid-col-1 shadow-md">
			<img className="h-72 w-full" src={img} alt={title} />
			<Link to={'/'} className="text-lg hover:underline text-center font-light px-1">{title}</Link>
			<div className="flex px-5 items-center justify-between">
				<span className="text-center font-semibold">${price}</span>
				<Link className="flex gap-1 items-center text-sm font-light hover:right-2 hover:font-medium relative transition-all" to={'/'}>View Details <ArrowRight  size={16}/></Link>
			</div>
		</div>
	)
}

export default ProductCard;