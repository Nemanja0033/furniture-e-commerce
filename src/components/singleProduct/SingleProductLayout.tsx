import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router"

const SingleProductLayout = () => {
    const productID = useParams();
    const [product, setProduct] = useState<any>();
    console.log(product)

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
    <main className="w-full grid lg:grid-cols-2 grid-cols-1 px-5 mt-20">
        <article className="w-full h-screen flex items-center justify-center">
            <img className="rounded-md h-full" src={product[0].image_path} alt={product[0].name} />
        </article>
        <section className="w-full lg:h-screen flex-row">

        </section>
    </main>
  )
}

export default SingleProductLayout