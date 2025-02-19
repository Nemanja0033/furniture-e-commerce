import {useState, useEffect} from 'react';
import axios from 'axios';
import ProductCard from '../views/ProductCard';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

const FeauturedSection = () => {
	const [products, setProducts] = useState<any[]>([]);
	console.log(products)

	useEffect(() => {
		axios.get('https://furniture-api.fly.dev/v1/products/?&limit=8')
		.then((res) => {
			setProducts(res.data.data);
		})
		.catch((err) => {
			console.log(err);
		})
	}, []);

	return(
		<main className="w-full h-auto md:text-start text-center font-light px-10 flex-row">
			<h3 className="text-xl">Aks Collection</h3>
			<div className='flex justify-between'>
				<h1 className="font-semibold text-2xl">Feautured Products</h1>
				<Link to={'/products'} className='flex gap-2 cursor-pointer'>View all <ArrowRight /></Link>
			</div>
			<section className='w-full grid md:grid-cols-4 grid-cols-1 mt-3 gap-3'>
			{products.map((p: any) => (
					<ProductCard img={p.image_path} 
								 title={p.name} 
								 price={p.price} 
								 />
			))}
			</section>
		</main>
	)
}

export default FeauturedSection