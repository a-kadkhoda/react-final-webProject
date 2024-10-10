import { useContext, useEffect } from "react";

import { MyContext } from "../context/MyContext";
import Card from "../components/Card";
import { useLocation } from "react-router-dom";
import useWhilst from "../hooks/useWhilst";

const Whilst = () => {
  const { whilst, setLocation } = useContext(MyContext);
  const { handleWhilst } = useWhilst();
  const { pathname } = useLocation();
  useEffect(() => {
    setLocation(pathname);
  }, []);

  return (
    <>
      <div className="container min-h-screen my-32">
        <div>
          <div className="mb-10 pb-1 border-b-2 border-zinc-900 rounded-sm max-w-60 drop-shadow">
            <span className="font-bold text-lg">Whilst</span>
          </div>
          <div className="grid grid-cols-4 gap-10">
            {whilst.map((item) => {
              return (
                <div key={item.id}>
                  <Card {...item} onWhilst={handleWhilst} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Whilst;
