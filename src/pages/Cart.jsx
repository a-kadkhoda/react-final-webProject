import { useContext, useEffect } from "react";

import { MyContext } from "../context/MyContext";

import { useLocation, useNavigate } from "react-router-dom";
import Card from "../components/Card";
import useWhilst from "../hooks/useWhilst";

const Cart = () => {
  const { setLocation, isLogin, products, cart } = useContext(MyContext);
  const { handleWhilst } = useWhilst();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  useEffect(() => {
    if (!isLogin) navigate("/login");

    setLocation(pathname);
  }, []);

  const handleNav = (id) => {
    navigate(`/product-info/${id}`);
  };

  return (
    <>
      <div className="container min-h-screen my-32">
        <div>
          <div className="mb-10 pb-1 border-b-2 border-zinc-900 rounded-sm max-w-60 drop-shadow">
            <span className="font-bold text-lg">Cart</span>
          </div>
          <div className="grid grid-cols-4 gap-10">
            {cart.map((cartItem) => {
              const product = products.find((p) => p.id === cartItem.id);
              return (
                <div
                  className="cursor-pointer"
                  key={product.id}
                  onClick={() => handleNav(product.id)}
                >
                  <Card {...product} onWhilst={handleWhilst} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
