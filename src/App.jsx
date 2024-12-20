import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext.jsx";
import CartContainer from "./components/CartContainer/CartContainer.jsx";
import Checkout from "./components/checkout/Checkout.jsx";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <ToastContainer theme="dark" />

          <Routes>
            <Route
              path="/"
              element={
                <ItemListContainer greeting={"Bienvenidos a Nehuen organico"} />
              }
            />
            <Route
              path="/categoria/:idCategoria"
              element={
                <ItemListContainer greeting={"Bienvenidos a Nehuen organico"} />
              }
            />
            <Route
              path="/detalle/:idProduct"
              element={<ItemDetailContainer />}
            />
            <Route path="/cart" element={<CartContainer />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
