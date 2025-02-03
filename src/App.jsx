import { BrowserRouter, Route, Routes } from "react-router";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./pages/HomePage/HomePage";
import ProductPage from "./pages/ProductPage/ProductPage";
import CartPage from "./pages/CartPage/CartPage";
import DetailsPage from "./pages/DetailsPage/DetailsPage";
import Footer from "./components/Footer/Footer";
import { CartProvider } from "./context/CartContext";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <CartProvider>
        <ToastContainer />
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/toy/:toyId" element={<DetailsPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
