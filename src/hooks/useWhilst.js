import { useContext } from "react";
import { MyContext } from "../context/MyContext";

const useWhilst = () => {
  const { whilst, whilstDispatch, products } = useContext(MyContext);

  const handleWhilst = (e, id) => {
    e.stopPropagation();
    const duplicate = whilst.find((item) => item.id === id);
    if (duplicate) {
      whilstDispatch({
        type: "remove",
        payload: id,
      });
    } else {
      const [like] = products.filter((item) => item.id === id);
      whilstDispatch({
        type: "add",
        payload: like,
      });
    }
  };

  return { handleWhilst };
};

export default useWhilst;
