
interface ProductCardProps {
	img: string, 
	title: string,
	price: number
}

const ProductCard = ({img, title, price}: ProductCardProps) => {

	return(
		<div className="md:w-[300px] w-[90%] h-[400px] rounded-md grid grid-col-1 shadow-md">
			<img className="h-[90%] w-full" src={img} alt={title} />
			<span className="text-xl text-center font-semibold">{title}</span>
			<span className="text-center">{price}$</span>
		</div>
	)
}

export default ProductCard;