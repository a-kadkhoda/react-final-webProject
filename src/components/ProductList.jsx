import Card from "./Card";

const ProductList = ({ products, onFilter, onNav, onWhilst }) => {
  return (
    <>
      <div className="w-full">
        <div className="flex flex-col  gap-y-10 ">
          <div>
            <input
              className="w-full p-2 px-10 outline-none rounded-xl border shadow"
              type="text"
              placeholder="Search to find your product ..."
              onChange={onFilter}
            />
          </div>
          <div className=" grid grid-cols-4 gap-5 self-center">
            {products.map((item) => {
              return (
                <div
                  key={item.id}
                  className="cursor-pointer"
                  onClick={() => onNav(item.id)}
                >
                  <Card {...item} onWhilst={onWhilst} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
