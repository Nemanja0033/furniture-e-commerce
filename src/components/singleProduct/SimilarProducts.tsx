import { useEffect, useState } from "react"
import ProductCard from "../products/ProductCard"
import axios from "axios";
import Loader from "../ui/Loader";

const SimilarProducts = (category: any) => {
  const [loading, setLoading] = useState(true)
  const [similarProducts, setSimilarProducts] = useState<any>();
  console.log(category)

  useEffect(() => {
    axios.get('https://furniture-api.fly.dev/v1/products', {
      params: {
        category: category.category || undefined
      }
    })
    .then((res) =>{
      setLoading(false);
      setSimilarProducts(res.data.data);
    })
    .catch((err) => console.log(err))
  }, [category])

  if(loading){
    return <Loader />
  }

  return (
    <section className="w-full grid lg:grid-cols-4 gap-3 md:grid-cols-2 grid-cols-1">
        {similarProducts.map((p: any) => (
            <ProductCard img={p.image_path} 
                         title={p.name} 
                         price={p.price} 
                         desc={p.description} 
                         wood_type={p.wood_type} 
                         id={p.id} 
                         />
        ))}
    </section>
  )
}

export default SimilarProducts