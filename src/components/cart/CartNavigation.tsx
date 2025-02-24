import {X}  from 'lucide-react'

interface CartNavigationProps {
    toggler: any
}
const CartNavigation = ({ toggler}: CartNavigationProps) => {
    return (
        <aside className='md:w-1/3 bg-amber-50 w-1/2 h-screen grid grid-cols-1 shadow-md'>
            <nav className="flex w-full h-[40px] px-3 justify-between items-center shadow-md" >
                <span>Shopping Cart ()</span>
                <button onClick={toggler} className='cursor-pointer'><X size={24} /></button>
            </nav>
            <section className="w-full grid grid-col-1 overflow-auto">

            </section>
            <nav className="flex w-full h-[40px] justify-center items-center shadow-md">

            </nav>
        </aside>
    )
}

export default CartNavigation