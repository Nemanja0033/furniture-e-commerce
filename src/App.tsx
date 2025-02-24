import { BrowserRouter as Router, Routes, Route } from "react-router"
import Index from "./pages/Index"
import Products from "./pages/Products"
import SingleProduct from "./pages/SingleProduct"

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<SingleProduct />} />
      </Routes>
    </Router>
  )
}

export default App
