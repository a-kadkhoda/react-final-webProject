import { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MyContext } from "../context/MyContext";
import { useForm } from "react-hook-form";

const Login = () => {
  const { setLocation, isLogin, setIsLogin, SetUser } = useContext(MyContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { pathname } = useLocation();
  useEffect(() => {
    setLocation(pathname);
    window.scrollTo(0, 0);

  }, []);

  const onSubmit = (data) => {
    SetUser(data);
    setIsLogin(true);
    navigate("/");
  };
  return (
    <>
      <div className="container flex justify-center items-center min-h-screen ">
        <div className="relative w-[60%] shadow border">
          <div className="relative">
            <img className="rounded overflow-hidden" src="login.jpg" alt="" />
            <span className="absolute top-[40%] left-[13%] cursor-default transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-white drop-shadow">
              <span>WELCOME TO OUR</span>
              <br />
              <span>ONLINE SHOP</span>
            </span>
          </div>
          <div className="absolute top-0 right-0 bg-white w-[75%] h-full rounded-tr rounded-br">
            {isLogin ? (
              <span className="h-full flex justify-center items-center font-bold text-3xl text-orange-500">
                login Successfully
              </span>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="p-5 space-y-10"
              >
                <span className="flex justify-center  font-bold">Sign Up</span>
                <div className="flex justify-between items-center child:w-full child:h-12 gap-x-5">
                  <div className="flex flex-col">
                    <label className="font-medium text-sm" htmlFor="firstName">
                      First Name
                    </label>
                    <input
                      className="border outline-orange-400 rounded py-0.5 px-2 caret-orange-400"
                      type="text"
                      id="firstName"
                      name="firstName"
                      {...register("firstName", {
                        required: "Please enter your first name",
                      })}
                    />
                    {errors.firstName && (
                      <span className="text-red-600">
                        {errors.firstName.message}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <label className="font-medium text-sm" htmlFor="lastName">
                      Last Name
                    </label>
                    <input
                      className="border outline-orange-400 rounded py-0.5 px-2 caret-orange-400"
                      type="text"
                      id="lastName"
                      name="lastName"
                      {...register("lastName", {
                        required: "Please enter your last name",
                      })}
                    />
                    {errors.lastName && (
                      <span className="text-red-600">
                        {errors.lastName.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex justify-between items-center child:w-full child:h-12 gap-x-5">
                  <div className="flex flex-col">
                    <label className="font-medium text-sm" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="border outline-orange-400 rounded py-0.5 px-2 caret-orange-400"
                      type="email"
                      id="email"
                      name="email"
                      {...register("email", {
                        required: "Please enter your email",
                      })}
                    />
                    {errors.email && (
                      <span className="text-red-600">
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <label className="font-medium text-sm" htmlFor="address">
                      Address
                    </label>
                    <input
                      className="border outline-orange-400 rounded py-0.5 px-2 caret-orange-400"
                      type="text"
                      id="address"
                      name="address"
                      {...register("address", {
                        required: "Please enter your address",
                      })}
                    />
                    {errors.address && (
                      <span className="text-red-600">
                        {errors.address.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex justify-between items-center child:w-full child:h-12 gap-x-5">
                  <div className="flex flex-col">
                    <label className="font-medium text-sm" htmlFor="password">
                      Password
                    </label>
                    <input
                      className="border outline-orange-400 rounded py-0.5 px-2 caret-orange-400"
                      type="password"
                      id="password"
                      name="password"
                      {...register("password", {
                        required: "Please enter your password",
                      })}
                    />
                    {errors.password && (
                      <span className="text-red-600">
                        {errors.password.message}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <label
                      className="font-medium text-sm"
                      htmlFor="confirmPassword"
                    >
                      Confirm Password
                    </label>
                    <input
                      className="border outline-orange-400 rounded py-0.5 px-2 caret-orange-400"
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      {...register("confirmPassword", {
                        required: "Please Confirm Password",
                      })}
                    />
                  </div>
                  {errors.confirmPassword && (
                    <span className="text-red-600">
                      {errors.confirmPassword.message}
                    </span>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full bg-orange-400 text-white font-semibold p-2 rounded hover:bg-orange-500 transition-all"
                >
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
