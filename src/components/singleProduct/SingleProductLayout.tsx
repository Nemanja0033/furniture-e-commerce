import axios from "axios";
import { ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router"

const SingleProductLayout = () => {
    const productID = useParams();
    const [product, setProduct] = useState<any>();
    console.log(productID)

    useEffect(() => {
        axios.get('https://furniture-api.fly.dev/v1/products',
            {
                params: {
                    limit: 100
                }
            }
        )
        .then((res) => setProduct(res.data.data.filter((d: any) => d.id == productID.id)))
        .catch((err) => console.error(err));
    }, []);

  return (
    <main className="w-full grid lg:grid-cols-2 gap-5 grid-cols-1 px-5 mt-25">
        <article className="w-full h-screen flex items-center justify-center">
            <img className="rounded-md h-full" src={product[0].image_path} alt={product[0].name} />
        </article>
        <section className="w-full lg:h-1/2 text-start grid gap-5 grid-cols-1 justify-start">
            <h1 className="text-3xl font-bold">{product[0].name}</h1>
            <p className="text-gray-500 textarea-lg">{product[0].description}</p>
            <b>Wood Type: <span className="font-normal">{product[0].wood_type}</span></b>
            <b>Finish: <span className="font-normal">{product[0].finish}</span></b>
            <b>Dimensions: <span className="font-normal">{product[0].dimensions.width} Width X {product[0].dimensions.height} Height X {product[0].dimensions.depth}</span></b>
            <span className="text-xl font-semibold">${product[0].price}</span>
            <button className="w-full bg-slate-900 text-white cursor-pointer hover:bg-slate-800 transition-all textarea-md rounded-md h-10 flex justify-center items-center"><ShoppingCart />Add to cart</button>
        </section>
    </main>
  )
}

export default SingleProductLayout