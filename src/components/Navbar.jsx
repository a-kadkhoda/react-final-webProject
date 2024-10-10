import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../context/MyContext";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { location, isLogin, user } = useContext(MyContext);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    addEventListener("scroll", handleScroll);

    return () => {
      removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <svg className="hidden">
        <symbol
          id="login"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25"
          />
        </symbol>
        <symbol
          id="bookmarks"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h1.5m9 0h-9"
          />
        </symbol>
        <symbol
          id="cart"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
          />
        </symbol>
      </svg>

      <nav
        className={
          location !== "/"
            ? "fixed w-full top-0 h-20 z-50 bg-zinc-900 shadow transition-all duration-700"
            : isScrolled
            ? "fixed w-full top-0 h-20 z-50 bg-zinc-900  shadow transition-all duration-700"
            : "fixed w-full top-0 h-20 z-50 backdrop-blur shadow transition-all duration-700"
        }
      >
        <div className="container w-full h-full px-5 grid grid-cols-2 items-center child:text-white ">
          <div className="flex justify-start items-center gap-x-5 child-hover:text-orange-500 child:transition-all">
            <Link to={"/"}>Home</Link>
            <Link to={"/products/all"}>Products</Link>
          </div>
          <div className="flex justify-end items-center gap-x-5 child-hover:text-orange-500 child:transition-all">
            <Link to={"/whilst"}>
              <svg className="w-6 h-6">
                <use href="#bookmarks" />
              </svg>
            </Link>
            {isLogin ? (
              <>
                <Link to={"/Cart"}>
                  <svg className="h-6 w-6">
                    <use href="#cart" />
                  </svg>
                </Link>
                <span className="cursor-default">{user.firstName}</span>
              </>
            ) : (
              <Link to={"/login"}>
                <div className="flex">
                  <svg className="w-6 h-6">
                    <use href="#login" />
                  </svg>
                  <span>Login</span>
                </div>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
