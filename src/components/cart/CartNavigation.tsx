import { X } from "lucide-react";
import { useCart } from "../../context/CartContext";
import ItemView from "./ItemView";

interface CartNavigationProps {
  toggler: () => void;
}

const CartNavigation = ({ toggler }: CartNavigationProps) => {
  const { state } = useCart();

  const totalPrice = state.items.reduce((total, item) => total + item.price, 0);

  return (
    <aside className="fixed top-0 right-0 w-[400px] max-w-[90%] bg-white h-full grid grid-rows-[auto_1fr_auto] shadow-lg">
      <nav className="flex w-full h-[50px] px-5 justify-between items-center shadow-sm">
        <span className="font-semibold text-lg">
          Shopping Cart ({state.items.length})
        </span>
        <button onClick={toggler} className="p-2 rounded-md hover:bg-gray-200 transition">
          <X size={24} />
        </button>
      </nav>

      <section className="w-full h-full grid grid-cols-1 gap-2 p-4 overflow-auto">
        {state.items.length > 0 ? (
          state.items.map((i) => (
            <ItemView key={i.id} {...i} />
          ))
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-center text-gray-500 mt-10">Your cart is empty.</p>
          </div>
        )}
      </section>

      <nav className="p-5 border-t border-gray-300 flex flex-col gap-4 shadow-md">
        <div className="flex justify-between text-lg font-semibold">
          <span>Total:</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
        <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-black/70 transition">
          Proceed to Checkout
        </button>
      </nav>
    </aside>
  );
};

export default CartNavigation;
