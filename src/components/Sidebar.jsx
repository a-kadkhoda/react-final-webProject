import { useEffect, useState } from "react";
import useApi from "../hooks/useApi";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [categoryList, setCategoryList] = useState(["all"]);
  const { getProductsCategory } = useApi();

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    getProductsCategory(signal).then((data) => {
      if (data) {
        setCategoryList([...categoryList, ...data]);
      }
    });
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      <div className=" bg-white rounded shadow border p-4 ">
        <span className="p-2 text-xl font-bold">Categories</span>
        <div className="flex flex-col p-2 divide-y child:p-2 child:font-medium child:w-full child:transition-all  child:h-full child-hover:bg-orange-400 child-hover:text-white ">
          {categoryList?.map((item) => {
            return (
              <Link key={item} to={`/products/${item}`}>
                {item}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
