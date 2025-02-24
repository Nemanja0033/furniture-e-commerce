import {useState, useEffect} from 'react';
import axios from 'axios';
import ProductCard from '../views/ProductCard';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import Loader from '../ui/Loader';

const FeauturedSection = () => {
	const [products, setProducts] = useState<any[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		axios.get('https://furniture-api.fly.dev/v1/products/?&limit=8')
		.then((res) => {
			setProducts(res.data.data);
			setLoading(false);
		})
		.catch((err) => {
			console.log(err);
		})
	}, []);

	if(loading){
		return(
			<Loader />
		)
	}

	return(
		<main className="w-full h-auto md:text-start font-light px-10 flex-row">
			<h3 className="text-xl">Aks Collection</h3>
			<div className='flex justify-between'>
				<h1 className="font-semibold text-2xl">Feautured Products</h1>
				<Link to={'/products'} className='flex gap-2 cursor-pointer'>View all <ArrowRight /></Link>
			</div>
			<section className='w-full grid md:grid-cols-4 place-items-center grid-cols-1 mt-3 gap-10'>
			{products.map((p: any) => (
					<ProductCard img={p.image_path} 
								 title={p.name} 
								 price={p.price}
								 desc={p.finish}
								 wood_type={p.wood_type} 
								 id={p.id}
								 />
			))}
			</section>
		</main>
	)
}

export default FeauturedSection