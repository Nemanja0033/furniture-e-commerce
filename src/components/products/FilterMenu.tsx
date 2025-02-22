import { X } from "lucide-react"
import { FilterMenuType } from "../../types/FilterMenuType"
import { useFilter } from "../../context/FilterReducer"

const FilterMenu = ({sortFilter, woodFilter, categoryFilter, closeFilter}: FilterMenuType) => {
  const {state} = useFilter();

  return (
    <main className="w-1/2 px-5 h-screen z-40 absolute bg-white/80 backdrop-blur-sm shadow-sm grid grid-cols-1 place-items-center">
      <nav className="flex w-full h-[5%] justify-between items-center">
        <h1 className="text-xl">Filters</h1>
        <button onClick={closeFilter}><X /></button>
      </nav>
      <section className="grid w-full h-[70%] grid-cols-1 gap-12 items-stretch">
                <select className="p-2" onChange={sortFilter} value={state.sort}>
                    <option value="">Sort</option>
                    <option value="price_asc">Price (Min to Max)</option>
                    <option value="price_desc">Price (Max to Min)</option>
                    <option value="name_asc">A-Z</option>
                    <option value="name_desc">Z-A</option>
                    <option value="newest">Newest</option>
                    <option value="oldest">Oldest</option>
                </select>
                <select className="p-2" onChange={woodFilter} value={state.wood_type}>
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
                <select className="p-2" onChange={categoryFilter} value={state.category}>
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
}

export default FilterMenu