import {X}  from 'lucide-react'
import { useCart } from '../../context/CartContext'
import ItemView from './ItemView';

interface CartNavigationProps {
    toggler: any
}
const CartNavigation = ({ toggler}: CartNavigationProps) => {
    const { state } = useCart();

    return (
        <aside className='w-[40%] bg-white h-screen grid grid-cols-1 shadow-md'>
            <nav className="flex w-full h-[40px] px-3 justify-between items-center shadow-md" >
                <span className='font-semibold'>Shopping Cart ({state.items.length})</span>
                <button onClick={toggler} className='cursor-pointer'><X size={24} /></button>
            </nav>
            <section className="w-full h-auto grid grid-col-1 gap-3 mt-2 overflow-auto">
                {state.items.map((i) => (
                    <ItemView title={i.title} id={i.id} img={i.img} price={i.price} wood_type={i.wood_type} />
                ))}
            </section>
            <nav className="flex w-fit h-[40px] justify-center items-center shadow-md">

            </nav>
        </aside>
    )
}

export default CartNavigation