import { useContext, useEffect, useState } from "react";
import { MyContext } from "../context/MyContext";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import ProductList from "../components/ProductList";
import useApi from "../hooks/useApi";
import useWhilst from "../hooks/useWhilst";

const Products = () => {
  const { setLocation, products, setProducts } = useContext(MyContext);
  const { getAllProducts, getProductsByCategory } = useApi();
  const { handleWhilst } = useWhilst();
  const [filtered, setFiltered] = useState([]);
  const { pathname } = useLocation();
  const { category } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setLocation(pathname);
    const controller = new AbortController();
    const signal = controller.signal;
    window.scrollTo(0, 0);

    if (pathname === "/products/all") {
      getAllProducts(signal).then((data) => {
        if (data) {
          setProducts(data);
          setFiltered(data);
        }
      });
    } else {
      getProductsByCategory(category, 0, signal).then((data) => {
        if (data) {
          setProducts(data);
          setFiltered(data);
        }
      });
    }

    return () => {
      controller.abort();
    };
  }, [category]);

  const handleFilter = (e) => {
    const filteredItems = products.filter((item) => {
      return item.title.toLowerCase().search(e.target.value) > -1;
    });

    setFiltered(filteredItems);
  };
  const handleNav = (id) => {
    navigate(`/product-info/${id}`);
  };

  return (
    <>
      <div className="container min-h-screen my-24 grid grid-cols-[20%,80%] gap-x-10">
        <div>
          <Sidebar />
        </div>
        <div>
          <ProductList
            products={filtered}
            onFilter={handleFilter}
            onNav={handleNav}
            onWhilst={handleWhilst}
          />
        </div>
      </div>
    </>
  );
};

export default Products;
