import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import { MyProvider } from "./context/MyContext";
import Layout from "./pages/Layout";
import Products from "./pages/Products";
import ProductInfo from "./pages/ProductInfo";
import Login from "./pages/Login";
import Whilst from "./pages/Whilst";
import Cart from "./pages/Cart";
import DefaultPage from "./pages/DefaultPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <MyProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products/:category" element={<Products />} />
              <Route path="/product-info/:id" element={<ProductInfo />} />
              <Route path="/login" element={<Login />} />
              <Route path="/whilst" element={<Whilst />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<DefaultPage />} />
            </Routes>
          </Layout>
        </MyProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
