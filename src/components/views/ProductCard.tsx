
interface ProductCardProps {
	img: string, 
	title: string,
	price: number
}

const ProductCard = ({img, title, price}: ProductCardProps) => {

	return(
		<div className="w-[300px] h-[400px] border border-gray-200 rounded-md grid grid-col-1 shadow-md p-1">
			<img className="h-[90%] w-full" src={img} alt={title} />
			<span className="text-xl text-center font-semibold">{title}</span>
			<span className="text-center">{price}$</span>
		</div>
	)
}

export default ProductCard;