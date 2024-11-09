import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext.jsx";
import CartContainer from "./components/CartContainer/CartContainer.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <CartProvider>
          <NavBar />

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
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
