import { useEffect, useRef, useState } from "react";
import Card from "./Card";
import useApi from "../hooks/useApi";

const Slider = ({ category, limit, onNav, onWhilst }) => {
  const { getProductsByCategory } = useApi();
  const [sliderItems, setSliderItems] = useState([]);
  const sliderRef = useRef(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    getProductsByCategory(category, limit, signal).then((data) => {
      if (data) {
        setSliderItems(data);
      }
    });

    return () => {
      controller.abort();
    };
  }, []);

  const scrollLeft = () => {
    sliderRef.current.scrollLeft -= 300;
  };
  const scrollRight = () => {
    sliderRef.current.scrollLeft += 300;
  };

  return (
    <>
      <svg className="hidden">
        <symbol
          id="leftArrow"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </symbol>
        <symbol
          id="rightArrow"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
            clipRule="evenodd"
          />
        </symbol>
      </svg>

      <div>
        <div className="mb-10 pb-1 border-b-2 border-zinc-900 rounded-sm max-w-60 drop-shadow">
          <span className="font-bold text-lg">{category}</span>
        </div>
        <div className="relative p-4 px-6  rounded-lg">
          <div className="absolute flex justify-center items-center hover:bg-orange-400 h-full w-5 bg-zinc-400/25 top-0 left-0 border-l-4 border-white hover:text-white rounded-tr rounded-br shadow cursor-pointer transition-all">
            <button
              onClick={scrollLeft}
              className="h-full w-full flex justify-center items-center"
            >
              <svg className="w-6 h-6 ">
                <use href="#leftArrow" />
              </svg>
            </button>
          </div>
          <div
            className="flex justify-start items-center overflow-scroll scrollbar-hide scroll-smooth gap-x-14"
            ref={sliderRef}
          >
            {sliderItems?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="cursor-pointer"
                  onClick={() => onNav(item.id)}
                >
                  <Card {...item} onWhilst={onWhilst} />
                </div>
              );
            })}
          </div>
          <div className="absolute flex justify-center items-center hover:bg-orange-400 h-full w-5 bg-zinc-400/25 top-0 right-0 border-r-4 border-white hover:text-white rounded-tl rounded-bl shadow cursor-pointer transition-all">
            <button
              onClick={scrollRight}
              className="h-full w-full flex justify-center items-center"
            >
              <svg className="w-6 h-6 ">
                <use href="#rightArrow" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
