import {useState, useEffect} from 'react';
import axios from 'axios';

const FeauturedSection = () => {
	const [products, setProducts] = useState([]);
	console.log(products)

	useEffect(() => {
		axios.get('https://furniture-api.fly.dev/v1/products')
		.then((res) => {
			setProducts(res.data);
		})
		.catch((err) => {
			console.log(err);
		})
	}, []);

	return(
		<main className="w-full h-auto md:text-start text-center font-light px-10 flex-row">
			<h3 className="text-xl">Aks Collection</h3>
			<h1 className="font-semibold text-2xl">Feautured Products</h1>

		</main>
	)
}

export default FeauturedSection