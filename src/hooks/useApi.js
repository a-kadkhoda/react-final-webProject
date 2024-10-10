import axios from "axios";

const useApi = () => {
  const getAllProducts = async (signal) => {
    try {
      const res = await axios.get(`https://dummyjson.com/products?limit=0`, {
        signal,
      });
      if (res.status === 200) {
        return res.data.products;
      } else {
        console.error(`HTTP error ! status code : ${res.status}`);
      }
    } catch (error) {
      if (!axios.isCancel(error)) {
        console.error(error.message);
      }
    }
  };
  const getProductsCategory = async (signal) => {
    try {
      const res = await axios.get(
        `https://dummyjson.com/products/category-list`,
        {
          signal,
        }
      );
      if (res.status === 200) {
        return res.data;
      } else {
        console.error(`HTTP error ! status code : ${res.status}`);
      }
    } catch (error) {
      if (!axios.isCancel(error)) {
        console.error(error.message);
      }
    }
  };
  const getSingleProduct = async (id, signal) => {
    try {
      const res = await axios.get(`https://dummyjson.com/products/${id}`, {
        signal,
      });
      if (res.status === 200) {
        return res.data;
      } else {
        console.error(`HTTP error ! status code : ${res.status}`);
      }
    } catch (error) {
      if (!axios.isCancel(error)) {
        console.error(error.message);
      }
    }
  };
  const getProductsByCategory = async (category, limit = 0, signal) => {
    try {
      const res = await axios.get(
        `https://dummyjson.com/products/category/${category}?limit=${limit}`,
        {
          signal,
        }
      );
      if (res.status === 200) {
        return res.data.products;
      } else {
        console.error(`HTTP error ! status code : ${res.status}`);
      }
    } catch (error) {
      if (!axios.isCancel(error)) {
        console.error(error.message);
      }
    }
  };
  return {
    getAllProducts,
    getSingleProduct,
    getProductsByCategory,
    getProductsCategory,
  };
};

export default useApi;
