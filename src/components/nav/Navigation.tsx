import { Search, ShoppingCart} from 'lucide-react'
import { useState } from 'react';
import { Link, useLocation } from 'react-router'
import CartNavigation from '../cart/CartNavigation';

const Navigation = () => { 
    const path = useLocation();
    const [isCartOpen, setIsCartOpen] = useState(false);
    const cartItems: any = localStorage.getItem('cart');

    const cartNavToggler = () => {
        setIsCartOpen(false);
    }

    if(isCartOpen){
        return (
        <div className='bg-black/70 z-50 fixed top-0 w-full max-h-screen flex justify-end'>
            <CartNavigation toggler={cartNavToggler} />
        </div>
        )
    }

    return (
    <nav className="w-full h-[70px] z-50 fixed top-0 items-center px-15 flex justify-between shadow-md backdrop-blur-lg bg-white-50/60">
        <Link to={'/'} className="text-3xl font-bold text-gray-800">Aks.</Link>
        <div className="flex items-center gap-2">
            {path.pathname !== "/products" ? <Link to={'/products'} className='rounded-lg border-gray-300 border p-1 hover:bg-gray-100 cursor-pointer'><Search size={24} /></Link>
            : 
            null
            }
            <button onClick={() => setIsCartOpen(true)} className='rounded-lg border-gray-300 border p-1 hover:bg-gray-100 cursor-pointer'><ShoppingCart size={24} />{cartItems[0].length}</button>
        </div>
    </nav>
  )
}

export default Navigation