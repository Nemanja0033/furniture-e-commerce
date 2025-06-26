import { X } from "lucide-react";
import { useCart } from "../../context/CartContext";
import ItemView from "./ItemView";
import { motion } from "framer-motion";

interface CartNavigationProps {
  toggler: () => void;
}

const CartNavigation = ({ toggler }: CartNavigationProps) => {
  const { state } = useCart();
  const totalItemsInCart = state.items.reduce((total, item) => total + item.amount, 0);

  return (
    <motion.div initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="fixed top-0 right-0 w-[400px] max-w-[90%] bg-white h-full grid grid-rows-[auto_1fr_auto] shadow-lg">
      <nav className="flex w-full h-[50px] px-5 justify-between items-center shadow-sm">
        <span className="font-semibold text-lg">
          Shopping Cart ({totalItemsInCart})
        </span>
        <button onClick={toggler} className="p-2 rounded-md hover:bg-gray-200 transition">
          <X size={24} />
        </button>
      </nav>

      <section className="w-full h-full flex-row p-2 overflow-auto">
        {state.items.length > 0 ? (
          state.items.map((i) => (
            <ItemView amount={i.amount} title={i.title} img={i.img} price={i.price} wood_type={i.wood_type} id={i.id}  />
          ))
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-center text-gray-500 mt-10">Your cart is empty.</p>
          </div>
        )}
      </section>

      <nav className="p-5 border-t border-gray-300 flex flex-col gap-4 shadow-md">
        <div className="flex justify-between text-lg font-semibold">
        </div>
        <button className="w-full bg-black text-white cursor-pointer py-3 rounded-lg hover:bg-black/70 transition">
          Proceed to Checkout {totalItemsInCart > 0 ? state.items.reduce((total, item) => {
            return total + item.price * item.amount;
          }, 0).toFixed(2) + '$' : ''}
        </button>
      </nav>
    </motion.div>
  );
};

export default CartNavigation;
