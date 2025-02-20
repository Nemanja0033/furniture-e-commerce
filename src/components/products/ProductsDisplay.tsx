import axios from "axios"
import { useEffect, useState } from "react"
import ProductCard from "../views/ProductCard";
import Loader from "../ui/Loader";
import { useFilter } from "../../context/FilterContext";

const ProductsDisplay = () => {
    const [products, setProducts] = useState<any []>([]);
    const [loading, setLoading] = useState(true);
    const {state, dispatch} = useFilter();

    const generateApiUrl = () => { //rest api filtering with query
        let baseUrl = "https://furniture-api.fly.dev/v1/products?";
        let params = [];
    
        if (state.category) params.push(`sort=${state.category}`);
        if (state.search) params.push(`search=${state.search}`);
    
        return baseUrl + params.join("&");
    };
    
    useEffect(() => {
        setLoading(true);
        axios.get(generateApiUrl())
            .then((res) => {
                setProducts(res.data.data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    }, [state.category, state.search]);
    
    if(loading){
		return(
			<>
			 <Loader />
			</>
		)
	}
  
  return (
    <main className="mt-[90px] px-5 ">
        <nav className="flex justify-start gap-3">
            <select onChange={(e) => dispatch({type: "SET_CATEGORY", payload: e.target.value})}>
                <option value="price_asc">Price (Min to Max)</option>
                <option value="price_desc">Price (Max to Min)</option>
                <option value="name_asc">A-Z</option>
                <option value="name_desc">Z-A</option>
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
            </select>
        </nav>
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