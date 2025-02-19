import axios from "axios"
import { useEffect, useState } from "react"
import ProductCard from "../views/ProductCard";

const ProductsDisplay = () => {
    const [products, setProducts] = useState<any []>([]);

    useEffect(() => {
        axios.get('https://furniture-api.fly.dev/v1/products/?&limit=100')
        .then((res) => {
            setProducts(res.data.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, [])

  return (
    <section className="w-full h-full grid md:grid-cols-4 mt-[90px] px-5 grid-cols-1 place-items-center gap-5">
        {products.map((p) => (
            <ProductCard img={p.image_path} title={p.name} price={p.price} />
        ))}
    </section>
  )
}

export default ProductsDisplay