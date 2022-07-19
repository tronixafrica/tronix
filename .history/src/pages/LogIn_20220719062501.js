import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Loader from "../components/Auth/Loader/Loader";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import * as Yup from "yup";
import Button from "../components/Button/Button";

const LogIn = () => {
  const [loader, setLoader] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  //   Initialize the navigate hook
  const navigate = useNavigate();

  // Formik initial values ... this is the initial form state
  let initialValues = {
    email: "",
    password: "",
  };

  // Yup validation schema... this is for form validation
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

  //The useFormik hook... takes all variables for handling the form
  const formik = useFormik({
    initialValues,
    // onSubmit,
    validationSchema,
  });
  console.log(formik, "The  formik");

  return (
    <>
      {/* Start of login page */}

      <section className="bg-backgroundDark overflow-y-auto w-full flex h-full items-center justify-center py-7">
        <div className="w-[450px] h-full rounded-md  px-5 scrollbar-hide">
          {/*Start of Header */}
          <h2 className="text-2xl font-bold text-center font-raleway mb-7">
            Log In
          </h2>
          {/* End of header */}
          {/* Form starts */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              formik.handleSubmit(e);
            }}
          >
            <article className="mb-4 ">
              {/* Email inputt  block starts */}
              <article className="block mb-4">
                {/* Email input start */}
                <div className={``}>
                  <input
                    type="email"
                    name="email"
                    className=" block w-full px-4 py-2 h-[50px] font-normal bg-transparent bg-clip-padding border-2 border-solid border-backgroundGrey rounded-md transition ease-in-out m-0 placeholder:text-backgroundGrey placeholder: focus:bg-transparent focus:border-textGrey focus:outline-none"
                    placeholder="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={(e) => {
                      formik.handleBlur(e);
                    }}
                  />
                </div>
                {/* Email input end */}
                {/* Email Input Error Message start */}
                {formik.touched.email && formik.errors.email && (
                  <p className="text-xs text-[#06CD3BC2] mt-1">
                    {formik.errors.email}
                  </p>
                )}
                {/* Email Input Error Message end */}
              </article>
              {/* Email input  block ends */}
              {/* Password input  block starts */}
              <article className="block mb-4">
                {/* Password input start */}
                <div className={`relative`}>
                  <input
                    type={`${showPassword ? "text" : "password"}`}
                    name="password"
                    id="password"
                    className=" block w-full px-4 py-2 h-[50px] font-normal bg-transparent bg-clip-padding border-2 border-solid border-backgroundGrey rounded-md transition ease-in-out m-0 placeholder:text-backgroundGrey placeholder: focus:bg-transparent focus:border-textGrey focus:outline-none"
                    placeholder="Password"
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
                      <AiOutlineEye fontSize="20px" />
                    ) : (
                      <AiOutlineEyeInvisible fontSize="20px" />
                    )}
                  </p>
                </div>
                {/* Password input end */}

                {/*Password Input Error Message */}
                {formik.touched.password && formik.errors.password && (
                  <p className="text-xs mt-1 text-[#06CD3BC2]">
                    {formik.errors.password}
                  </p>
                )}
                {/* Password input block ends */}
              </article>
              {/* Password input block ends */}
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

            {/* OR Divider starts*/}
            <article className="flex items-center  w-full mt-5">
              <div className="border-t border-backgroundGrey w-full"></div>
              <p className="mx-3 font-poppins">OR</p>
              <div className="border-t border-backgroundGrey w-full"></div>
            </article>
            {/* OR Divider ends*/}

            {/*Sign in With google starts*/}
            <Button
              disabled={false}
              type="submit"
              backgroundColor="backgroundGrey"
              textColor="white"
              border={true}
              borderColor="[#dadada26]"
              fontFamily="poppins"
            >
              <FcGoogle fontSize="25px" className="mr-1 ml-2" />
              Google
            </Button>

            {/*Sign in With google ends*/}
            {/* Login button starts */}
            <Button
              disabled={false}
              type="submit"
              backgroundColor="backgroundRed"
              textColor="white"
              fontFamily="poppins"
            >
              {loader ? <Loader /> : "log In"}
            </Button>
            {/* Login button ends */}
          </form>
          {/* Form ends */}

          {/* Sign up redirect button starts */}
          <div className="mt-7">
            <article className="flex transition-[border] duration-300 w-full  justify-center">
              <p className="">First time?</p>
              <p
                className="pl-2 transition-[border] text-backgroundRed duration-300 cursor-pointer hover:underline hover:underline-offset-1"
                onClick={() => {
                  navigate("/auth/signup");
                }}
              >
                Create an account
              </p>
            </article>
          </div>
          {/* Sign up redirect button ends */}
        </div>
      </section>
      {/* End  of login page */}
    </>
  );
};

export default LogIn;
