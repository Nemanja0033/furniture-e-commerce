
interface ProductCardProps {
	img: string, 
	title: string,
	price: number
}

const ProductCard = ({img, title, price}: ProductCardProps) => {

	return(
		<div className="md:w-[100%] w-[90%] hover:opacity-80 translation-all cursor-pointer h-[400px] rounded-md grid grid-col-1 shadow-md">
			<img className="h-[90%] w-full" src={img} alt={title} />
			<span className="text-xl text-center font-semibold px-1">{title}</span>
			<span className="text-center font-semibold">{price}$</span>
		</div>
	)
}

export default ProductCard;