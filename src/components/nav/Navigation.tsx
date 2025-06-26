import {Search, ShoppingCart} from 'lucide-react'
import { useState } from 'react';
import { Link, useLocation } from 'react-router'
import CartNavigation from '../cart/CartNavigation';
import { useCart } from '../../context/CartContext';
import { motion } from 'framer-motion';

const Navigation = () => { 
    const path = useLocation();
    const [isCartOpen, setIsCartOpen] = useState(false);
    const { state } = useCart();
    const totalItemsInCart = state.items.reduce((total, item) => total + item.amount, 0);

    const cartNavToggler = () => {
        setIsCartOpen(false);
    }

    return (
    <>
        <motion.div initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="w-full h-[70px] z-50 fixed top-0 items-center px-15 flex justify-between shadow-md backdrop-blur-lg bg-white-50/60">
            <motion.div whileHover={{ scale: 1.05 }}><Link to={'/'} className="text-3xl font-bold text-gray-800">Aks.</Link></motion.div>
            <div className="flex items-center gap-2">
                {path.pathname !== "/products" ? <Link to={'/products'} className='rounded-lg border-gray-300 border p-1 hover:bg-gray-100 cursor-pointer'><Search size={24} /></Link>
                : 
                null
                }
                <motion.button whileTap={{ scale: 0.95 }} onClick={() => setIsCartOpen(true)} className='rounded-lg border-gray-300 border p-1 hover:bg-gray-100 cursor-pointer'><ShoppingCart size={24} /></motion.button>
                <span className='bg-slate-500 text-white rounded-full w-6 scale-90 relative right-5 bottom-3 text-center'>{totalItemsInCart < 1 ? null : totalItemsInCart}</span>
            </div>
        </motion.div>
        {isCartOpen && (
            <div className='bg-black/70 z-50 fixed top-0 w-full max-h-screen flex justify-end'>
                <CartNavigation toggler={cartNavToggler} />
            </div>
        )}
    </>
  )
}

export default Navigation