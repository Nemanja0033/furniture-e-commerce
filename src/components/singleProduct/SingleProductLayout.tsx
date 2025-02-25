import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router"

const SingleProductLayout = () => {
    const productID = useParams();
    const [product, setProduct] = useState();
    console.log(product)

    useEffect(() => {
        axios.get('https://furniture-api.fly.dev/v1/products')
        .then((res) => setProduct(res.data))
        .catch((err) => console.error(err));
    }, [productID]);

  return (
    <main className="w-full grid lg:grid-cols-2 grid-cols-1 px-5">
        <article className="w-full lg:h-screen flex justify-center">

        </article>
        <section className="w-full lg:h-screen flex-row">

        </section>
    </main>
  )
}

export default SingleProductLayout