import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Slider from "../components/Slider";
import { useContext, useEffect } from "react";
import { MyContext } from "../context/MyContext";
import useWhilst from "../hooks/useWhilst";

const Home = () => {
  const { setLocation } = useContext(MyContext);
  const { handleWhilst } = useWhilst();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  useEffect(() => {
    setLocation(pathname);
    window.scrollTo(0, 0);

  }, []);

  const handleNav = (id) => {
    navigate(`/product-info/${id}`);
  };
  return (
    <>
      <div className="min-h-screen mb-20">
        <Header />
        <div className="container">
          <div className="mt-20">
            <Slider
              category={"groceries"}
              limit={0}
              onNav={handleNav}
              onWhilst={handleWhilst}
            />
          </div>
          <div className="mt-20">
            <Slider
              category={"smartphones"}
              limit={0}
              onNav={handleNav}
              onWhilst={handleWhilst}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
