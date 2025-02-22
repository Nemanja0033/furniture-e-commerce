import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "../views/ProductCard";
import Loader from "../ui/Loader";
import { useFilter } from "../../context/FilterReducer";
import { useSearchParams } from "react-router";
import { Settings2, X } from "lucide-react";

const ProductsDisplay = () => {
    const [products, setProducts] = useState<any[]>([]);
    const [isFiltersOpen, setIsFiltersOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const { state, dispatch } = useFilter();
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const sortFromUrl = searchParams.get("sort") || "";
        const searchFromURL = searchParams.get("name") || "";
        const categoryFromUrl = searchParams.get("category") || "";
        const woodTypeFromUrl = searchParams.get("wood_type") || "";
        const offsetFromUrl = searchParams.get("offset") || "";
        const limitFromUrl = searchParams.get("limit") || "";

        dispatch({ type: "SET_SORT", payload: sortFromUrl});
        dispatch({ type: "SET_NAME", payload: searchFromURL });
        dispatch({ type: "SET_CATEGORY", payload: categoryFromUrl});
        dispatch({ type: "WOOD_TYPE", payload: woodTypeFromUrl});
        dispatch({ type: "OFFSET", payload: offsetFromUrl} );
        dispatch({ type: "SET_LIMIT", payload: limitFromUrl});
    }, []);

    useEffect(() => {
        setLoading(true);
        axios.get('https://furniture-api.fly.dev/v1/products/', {
            params: {
                limit: state.limit || undefined,
                sort: state.sort || undefined,
                name: state.name || undefined,
                category: state.category || undefined,
                wood_type: state.wood_type || undefined,
                offset: state.offset || undefined,
            }
        })
        .then((res) => {
            setProducts(res.data.data);
            setLoading(false);
        })
        .catch((err) => {
            console.error("Error fetching products:", err);
            setLoading(false);
        });
    }, [state.sort, state.name, state.category, state.wood_type, state.offset]);

    const closeFilter = () => {
        setIsFiltersOpen(false);
    };

    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newSort = e.target.value;
        dispatch({ type: "SET_SORT", payload: newSort });

        setSearchParams((prev: any) => {
            const params = new URLSearchParams(prev);
            params.set("sort", newSort);
            return params;
        });
        closeFilter();
    };

    const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newCategory = e.target.value;
        dispatch({ type: "SET_CATEGORY", payload: newCategory})

        setSearchParams((perv: any) => {
            const params = new URLSearchParams(perv);
            params.set('category', newCategory);
            return params;
        });
        closeFilter();
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newSearch = e.target.value;
        dispatch({ type: "SET_NAME", payload: newSearch });

        setSearchParams((prev) => {
            const params = new URLSearchParams(prev);
            params.set("search", newSearch);
            return params;
        });
        closeFilter();
    };

    const handleWoodChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newWoodType = e.target.value;
        dispatch({type: "WOOD_TYPE", payload: newWoodType});

        setSearchParams((perv) => {
            const params = new URLSearchParams(perv);
            params.set("wood_type", newWoodType);
            return params;
        });
        closeFilter();
    };
    
    return (
        <main className="mt-[90px] px-5">
            {isFiltersOpen ? ( //cannot separate this into signle component beacuse it cause sharing params state issue
                <main className="w-1/2 py-5 px-5 h-auto z-40 absolute bg-white/80 backdrop-blur-sm shadow-sm flex-row place-items-center">
                <nav className="flex h-[50%] mb-12 w-full justify-between items-center">
                  <h1 className="text-xl">Filters</h1>
                  <button onClick={closeFilter}><X /></button>
                </nav>
                <section className="grid w-full h-[50%] grid-cols-1 gap-12 items">
                          <select className="p-2" onChange={handleSortChange} value={state.sort}>
                              <option value="">Sort</option>
                              <option value="price_asc">Price (Min to Max)</option>
                              <option value="price_desc">Price (Max to Min)</option>
                              <option value="name_asc">A-Z</option>
                              <option value="name_desc">Z-A</option>
                              <option value="newest">Newest</option>
                              <option value="oldest">Oldest</option>
                          </select>
                          <select className="p-2" onChange={handleWoodChange} value={state.wood_type}>
                              <option value="">Wood Type</option>
                              <option value="walunt">Walunt</option>
                              <option value="maple">Maple</option>
                              <option value="oak">Oak</option>
                              <option value="pine">Pine</option>
                              <option value="eucalyptus">Eucalyptus</option>
                              <option value="bamboo">Bamboo</option>
                              <option value="teak">Teak</option>
                              <option value="cedar">Cedar</option>
                          </select>
                          <select className="p-2" onChange={handleCategoryChange} value={state.category}>
                              <option value="">Category</option>
                              <option value="sofa">Sofa</option>
                              <option value="chair">Chair</option>
                              <option value="stool">Stool</option>
                              <option value="table">Table</option>
                              <option value="desk">Desks</option>
                              <option value="kitchen">Kitchen</option>
                          </select>
                </section>
              </main>
            )
            :
            null}
            <nav className="px-5 py-2 flex justify-between lg:hidden">
                <button onClick={() => setIsFiltersOpen(!isFiltersOpen)} className="flex rounded-lg border-gray-300 border p-1 hover:bg-gray-100 cursor-pointer items-center">Filters <Settings2 /></button>
                <input
                    type="text"
                    placeholder="Search products..."
                    onChange={handleSearchChange}
                    className="border p-2 "
                />
            </nav>
            <nav className="lg:flex hidden justify-between gap-3 mb-3 py-3 border-b border-gray-300">
               <div className="flex gap-2">
               <select className="p-2" onChange={handleSortChange} value={state.sort}>
                    <option value="">Sort</option>
                    <option value="price_asc">Price (Min to Max)</option>
                    <option value="price_desc">Price (Max to Min)</option>
                    <option value="name_asc">A-Z</option>
                    <option value="name_desc">Z-A</option>
                    <option value="newest">Newest</option>
                    <option value="oldest">Oldest</option>
                </select>
                <select className="p-2" onChange={handleWoodChange} value={state.wood_type}>
                    <option value="">Wood Type</option>
                    <option value="walunt">Walunt</option>
                    <option value="maple">Maple</option>
                    <option value="oak">Oak</option>
                    <option value="pine">Pine</option>
                    <option value="eucalyptus">Eucalyptus</option>
                    <option value="bamboo">Bamboo</option>
                    <option value="teak">Teak</option>
                    <option value="cedar">Cedar</option>
                </select>
                <select className="p-2" onChange={handleCategoryChange} value={state.sort}>
                    <option value="">Category</option>
                    <option value="sofa">Sofa</option>
                    <option value="chair">Chair</option>
                    <option value="stool">Stool</option>
                    <option value="table">Table</option>
                    <option value="desk">Desks</option>
                    <option value="kitchen">Kitchen</option>
                </select>
               </div>
                <input
                    type="text"
                    placeholder="Search products..."
                    onChange={handleSearchChange}
                    className="border p-2 "
                />
            </nav>

            {state.name.length > 0 && (
                <h1 className="font-bold text-xl">Results for "{state.name}"</h1>
            )}

            <section className={`w-full h-full ${!loading ? 'grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 place-items-center gap-5' : 'flex justify-center items-center'}`}>
                {!loading ? (
                    products.length > 0 ? (
                        products.map((p) => (
                            <ProductCard key={p.id} img={p.image_path} title={p.name} price={p.price} />
                        ))
                    ) : (
                        <p className="text-center mt-5 text-lg">No products found.</p>
                    )
                )
                :
                (
                    <Loader />
                )}
            </section>
            <nav className="flex justify-center">
            <div className="flex justify-center gap-4 mt-5">
                    <button
                        disabled={Number(state.offset) === 0}
                        onClick={() => {
                            const newOffset = Math.max(0, Number(state.offset) - 10);
                            dispatch({ type: "OFFSET", payload: newOffset.toString() });
                            setSearchParams((prev) => {
                                const params = new URLSearchParams(prev);
                                params.set("offset", newOffset.toString());
                                return params;
                            });
                        }}
                        className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
                    >
                        Previous
                    </button>
                    <button
                        onClick={() => {
                            const newOffset = Number(state.offset) + 10;
                            dispatch({ type: "OFFSET", payload: newOffset.toString() });
                            setSearchParams((prev) => {
                                const params = new URLSearchParams(prev);
                                params.set("offset", newOffset.toString());
                                return params;
                            });
                        }}
                        className="px-4 py-2 bg-gray-200 rounded"
                    >
                        Next
                    </button>
                </div>
            </nav>
        </main>
    );
};

export default ProductsDisplay;
