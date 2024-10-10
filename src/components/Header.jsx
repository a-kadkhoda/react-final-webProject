const Header = () => {
  return (
    <>
      <header className="min-h-screen">
        <div className="relative">
          <div>
            <img className="w-full h-screen shadow" src="basket.jpg" alt="" />
          </div>
          <div className="absolute top-1/2 left-[20%] transform -translate-x-1/2 -translate-y-1/2 cursor-default hover:scale-110 transition-all duration-500 group ">
            <h2 className="font-bold text-3xl text-white group-hover:text-orange-400 transition-all duration-500">
              Welcome to Online Shop
            </h2>
            <span className="font-semibold text-lg text-white group-hover:text-orange-400 transition-all duration-500">
              Discover the latest trends and shop with confidence today!
            </span>
            <span className="block bg-white w-0 h-1 rounded group-hover:w-full group-hover:bg-orange-400 transition-all duration-500 "></span>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
