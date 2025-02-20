import axios from "axios"
import { useEffect, useState } from "react"
import ProductCard from "../views/ProductCard";
import Loader from "../ui/Loader";
import { useFilter } from "../../context/FilterContext";

const ProductsDisplay = () => {
    const [products, setProducts] = useState<any []>([]);
    const [loading, setLoading] = useState(true);
    const {state} = useFilter();
    console.log(products)

    useEffect(() => {
        axios.get('https://furniture-api.fly.dev/v1/products/?&limit=100')
        .then((res) => {
            setProducts(res.data.data);
            setLoading(false);
        })
        .catch((err) => {
            console.log(err);
        });
    }, [])

    if(loading){
		return(
			<>
			 <Loader />
			</>
		)
	}
  
  return (
    <main className="mt-[90px] px-5 ">
        {state.search.length > 0 ? (
            <h1 className="font-bold text-xl">Results for "{state.search}"</h1>    
            ) 
            : 
            null
            }
        <section className="w-full h-full grid md:grid-cols-4 grid-cols-1 place-items-center gap-5">
            {products.filter((p) => p.name.toLowerCase().includes(state.search.toLowerCase())).map((p) => (
                <ProductCard img={p.image_path} title={p.name} price={p.price} />
            ))}
        </section>
    </main>
  )
}

export default ProductsDisplay