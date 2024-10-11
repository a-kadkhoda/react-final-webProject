import { useContext, useEffect } from "react";
import { MyContext } from "../context/MyContext";
import { useLocation } from "react-router-dom";

const DefaultPage = () => {
  const { setLocation } = useContext(MyContext);
  const { pathname } = useLocation();

  useEffect(() => {
    setLocation(pathname);
    window.scrollTo(0, 0);

  }, []);

  return (
    <>
      <div className="min-h-screen flex justify-center items-center">
        <span className="font-bold text-4xl drop-shadow">404 NOT FOUND</span>
      </div>
    </>
  );
};

export default DefaultPage;
