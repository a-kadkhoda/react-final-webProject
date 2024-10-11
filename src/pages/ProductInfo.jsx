import { useContext, useEffect, useState } from "react";
import useApi from "../hooks/useApi";
import { useLocation, useParams } from "react-router-dom";
import { MyContext } from "../context/MyContext";
import useCart from "../hooks/useCart";

const ProductInfo = () => {
  const { setLocation, cart } = useContext(MyContext);
  const { getSingleProduct } = useApi();
  const { addCart, removeCart, handleCart } = useCart();
  const [product, setProduct] = useState({});
  const [detail, setDetail] = useState("review");
  const param = useParams();
  const { pathname } = useLocation();

  const {
    id,
    images,
    title,
    rating,
    price,
    category,
    description,
    dimensions,
    reviews,
  } = product;
  let contentDetails;
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    window.scrollTo(0, 0);

    setLocation(pathname);
    getSingleProduct(param.id, signal).then((data) => {
      if (data) {
        setProduct(data);
      }
    });

    return () => {
      controller.abort();
    };
  }, []);

  const handleDetails = (detail) => {
    setDetail(detail);
  };

  switch (detail) {
    case "review":
      contentDetails = (
        <>
          <div className="w-full p-10 flex flex-col ">
            <span className="font-bold text-2xl ">Introduction</span>
            <p className="mt-5">{description}</p>
          </div>
        </>
      );

      break;
    case "specs":
      contentDetails = (
        <>
          <div className="w-full p-10 flex flex-col space-y-10 ">
            <div className="w-1/2">
              <span className="font-bold text-2xl ">Diemnsions</span>

              <table className="w-full odd:child:bg-orange-100">
                <tr className="child:border child:p-2">
                  <td className="font-bold">width</td>
                  <td> {dimensions?.width} </td>
                </tr>
                <tr className="child:border child:p-2">
                  <td className="font-bold">height</td>
                  <td> {dimensions?.height} </td>
                </tr>
                <tr className="child:border child:p-2">
                  <td className="font-bold">depth</td>
                  <td> {dimensions?.depth} </td>
                </tr>
              </table>
            </div>
          </div>
        </>
      );

      break;
    case "comments":
      contentDetails = (
        <>
          <div className="w-full p-10 flex flex-col gap-y-10 child:h-40 child:p-2 divide-y-2 ">
            {reviews?.map((item) => {
              return (
                <>
                  <div className="flex gap-x-20 justify-start">
                    <div className="flex flex-col justify-between w-96">
                      <div className="flex flex-col gap-y-1 ">
                        <div className="flex items-center gap-x-1">
                          <span className="font-bold">Name : </span>
                          <span className="text-sm">{item.reviewerName}</span>
                        </div>
                        <div className="flex items-center gap-x-1">
                          <span className="font-bold">Email : </span>
                          <span className="text-sm">{item.reviewerEmail}</span>
                        </div>
                        <div className="w-full flex items-center gap-x-1">
                          <svg className="w-4 h-4 text-orange-400">
                            <use href="#star" />
                          </svg>
                          <span>{item.rating}</span>
                        </div>
                      </div>
                      <span>{item.date}</span>
                    </div>
                    <div className="w-full">{item.comment}</div>
                  </div>
                </>
              );
            })}
          </div>
        </>
      );

      break;

    default:
      break;
  }

  return (
    <>
      <svg className="hidden">
        <symbol
          id="star"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
            clipRule="evenodd"
          />
        </symbol>
        <symbol
          id="heart"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
        </symbol>
      </svg>
      <div className="container min-h-screen my-48">
        <div className="grid grid-cols-[30%,70%] child:p-5">
          <div className="flex flex-col justify-center items-center">
            <img className="w-60 h-60 drop-shadow-2xl" src={[images]} alt="" />
          </div>
          <div className=" p-5 flex flex-col justify-between items-start bg-white rounded shadow border space-y-2 ">
            <div className="w-full">
              <div className="w-full flex justify-between">
                <span className="font-bold text-xl">{title}</span>
                <svg className="w-5 h-5 hover:text-red-600 cursor-pointer hover:animate-bounce transition-all">
                  <use href="#heart" />
                </svg>
              </div>
              <span className="font-semibold">Category : {category}</span>
              <div className="w-full flex items-center gap-x-1">
                <svg className="w-4 h-4 text-orange-400">
                  <use href="#star" />
                </svg>
                <span>{rating}</span>
              </div>
            </div>
            <div className="w-full flex justify-between">
              <span className="font-bold">Price : ${price}</span>
              {cart.find((item) => item.id === id) ? (
                <div className="flex items-center gap-x-5">
                  <button
                    onClick={() => removeCart(id)}
                    className="w-10 bg-orange-400 text-white font-bold text-md border rounded-lg"
                  >
                    -
                  </button>
                  <span className="font-bold">
                    {cart.find((item) => item.id === id)?.count}
                  </span>
                  <button
                    onClick={() => addCart(id)}
                    className="w-10 bg-orange-400 text-white font-bold text-md border rounded-lg"
                  >
                    +
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => handleCart(id)}
                  className="w-40 h-10 bg-orange-400 text-white font-bold text-md border rounded-lg hover:bg-orange-500 transition-all"
                >
                  Buy
                </button>
              )}
            </div>
          </div>
        </div>
        <div>
          <div className="mt-20">
            <div className=" flex items-center gap-x-5 child:bg-white  ">
              <button
                onClick={() => handleDetails("review")}
                className={
                  detail === "review"
                    ? "w-40 border border-t-4 border-t-orange-400 border-b-0 transition-all z-10"
                    : "w-40 border border-t-4 transition-all"
                }
              >
                review
              </button>
              <button
                onClick={() => handleDetails("specs")}
                className={
                  detail === "specs"
                    ? "w-40 border border-t-4 border-t-orange-400 border-b-0 transition-all z-10"
                    : "w-40 border border-t-4 transition-all"
                }
              >
                specs
              </button>
              <button
                onClick={() => handleDetails("comments")}
                className={
                  detail === "comments"
                    ? "w-40 border border-t-4 border-t-orange-400 border-b-0 transition-all z-10"
                    : "w-40 border border-t-4  transition-all"
                }
              >
                comments
              </button>
            </div>
            <div className="w-full bg-white -mt-0.5 border shadow">
              {contentDetails}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductInfo;
