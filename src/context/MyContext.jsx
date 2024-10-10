import { createContext, useReducer, useState } from "react";
import WhilstReducer from "../reducers/WhilstReducer";
import CartReducer from "../reducers/CartReducer";

const MyContext = createContext(null);

const MyProvider = ({ children }) => {
  const [location, setLocation] = useState("/");
  const [isLogin, setIsLogin] = useState(false);
  const [user, SetUser] = useState({});
  const [products, setProducts] = useState([]);
  const [whilst, whilstDispatch] = useReducer(WhilstReducer, []);
  const [cart, cartDispatch] = useReducer(CartReducer, []);

  return (
    <>
      <MyContext.Provider
        value={{
          location,
          setLocation,
          isLogin,
          setIsLogin,
          user,
          SetUser,
          whilst,
          whilstDispatch,
          products,
          setProducts,
          cart,
          cartDispatch,
        }}
      >
        {children}
      </MyContext.Provider>
    </>
  );
};

export { MyContext, MyProvider };
