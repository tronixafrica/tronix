import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Loader from "../components/Auth/Loader/Loader";
import { FcGoogle } from "react-icons/fc";
import * as Yup from "yup";

const LogIn = () => {
  const [loader, setLoader] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // INITIAL FORM VALUES
  let initialValues = {
    email: "",
    password: "",
  };

  // Yup Validation Schema
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid Email")
      .required("This field is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Password must contain at least one uppercase, one lowercase, one number and one special character e.g (!@#$%^&*)"
      )
      .required("This field is required"),
  });

  // USING FORMIK PACKAGE FOR FORM HANDLING
  const formik = useFormik({
    initialValues,
    // onSubmit,
    validationSchema,
  });
  console.log(formik, "The  formik");

  return (
    <>
      {/* Start of login page */}

      <section className="bg-backgroundDark w-full flex h-screen items-center justify-center py-7">
        <div className="w-[450px] h-full bg-red-700 rounded-md  px-6 scrollbar-hide">
          <h2 className="text-xl font-bold mb-16 text-center">Log In</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              formik.handleSubmit(e);
            }}
          >
            <article className="mb-4 ">
              <article className="block mb-4">
                <div className={``}>
                  <input
                    type="email"
                    name="email"
                    className=" block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-transparent bg-clip-padding border-2 border-solid border-backgroundGrey rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-transparent focus:border-blue-600 focus:outline-none"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={(e) => {
                      formik.handleBlur(e);
                    }}
                  />
                </div>
                {/* Email Input Error Message */}
                {formik.touched.email && formik.errors.email && (
                  <p className="text-xs text-[#06CD3BC2] mt-1">
                    {formik.errors.email}
                  </p>
                )}
              </article>
              <article className="block mb-4">
                <div className={``}>
                  <input
                    type={`${showPassword ? "text" : "password"}`}
                    name="password"
                    id="password"
                    className=" block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-transparent bg-clip-padding border-2 border-solid border-backgroundGrey rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-transparent focus:border-blue-600 focus:outline-none"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={(e) => {
                      formik.handleBlur(e);
                    }}
                  />
                  <p
                    className="absolute right-3 top-4 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <AiOutlineEye fontSize="20px" color="#d2caca" />
                    ) : (
                      <AiOutlineEyeInvisible fontSize="20px" color="#d2caca" />
                    )}
                  </p>
                </div>
                {/*Password Input Error Message */}
                {formik.touched.password && formik.errors.password && (
                  <p className="text-xs mt-1 text-[#06CD3BC2]">
                    {formik.errors.password}
                  </p>
                )}
              </article>
            </article>
            <article className="flex items-center justify-between mb-4">
              <div className="text-sm">
                <button
                  type="button"
                  className="font-[400] text-sm hover:underline hover:underline-offset-1"
                  //   onClick={resetPassword}
                >
                  {" "}
                  Forgot your password?{" "}
                </button>
              </div>
            </article>

            {/* OR Divider */}
            <article className="flex items-center  w-full mt-5">
              <div className="border-t border-backgroundGrey w-full"></div>
              <p className="mx-3">OR</p>
              <div className="border-t border-backgroundGrey w-full"></div>
            </article>

            {/*Sign in With google */}
            <article className="flex items-center justify-between w-full mt-5">
              <button
                type="button"
                className={`flex justify-center items-center px-4 h-12 w-24 grow font-bold text-white rounded-md bg-backgroundGrey border border-solid border-[#292828C2] hover:brightness-90`}
              >
                <FcGoogle fontSize="25px" className="mr-1 ml-2" />
                Google
              </button>
            </article>
            <article className="flex items-center justify-between w-full mt-10">
              <button
                type="submit"
                className={`flex uppercase justify-center items-center px-4 h-12 w-24 grow font-bold text-white rounded-md bg-[#D20202] hover:brightness-90`}
              >
                {loader ? <Loader /> : "log In"}
              </button>
            </article>
          </form>
        </div>
        {/*  <div className="mb-8">
              <article className="flex font-[300] transition-[border] duration-300 w-full  justify-center">
                <p className="text-secondary-light">First time?</p>
                <p className="pl-2 font-[300] transition-[border] duration-300 cursor-pointer hover:underline hover:underline-offset-1">
                  Create an account
                </p>
              </article>
            </div> */}
      </section>
      {/*  */}
    </>
  );
};

export default LogIn;
