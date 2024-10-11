import { useContext } from "react";
import { MyContext } from "../context/MyContext";
import { useNavigate } from "react-router-dom";

const useCart = () => {
  const { isLogin, cartDispatch } = useContext(MyContext);
  const navigate = useNavigate();
  const handleCart = (id) => {
    if (!isLogin) {
      navigate("/login");
    }
    cartDispatch({
      type: "buy",
      payload: {
        id: id,
        count: 1,
      },
    });
  };
  const addCart = (id) => {
    cartDispatch({
      type: "increased",
      payload: {
        id: id,
      },
    });
  };
  const removeCart = (id) => {
    cartDispatch({
      type: "decreased",
      payload: {
        id: id,
      },
    });
  };
  const removeItem =(e,id)=>{
    e.stopPropagation()
    cartDispatch({
      type : "remove",
      payload : {
        id:id
      }
    })
  }

  return { addCart, removeCart, handleCart ,removeItem};
};

export default useCart;
