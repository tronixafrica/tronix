import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Loader from "../components/Auth/Loader/Loader";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import * as Yup from "yup";
import RedButton from "../components/Auth/RedButton/RedButton";

const SignUp = () => {
  const [loader, setLoader] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  //   Initialize the navigate hook
  const navigate = useNavigate();

  // Formik initial values ... this is the initial form state
  let initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
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
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("This field is required"),
  });

  //The useFormik hook... takes all variables for handling the form
  const formik = useFormik({
    initialValues,
    // onSubmit,
    validationSchema,
  });

  return (
    <>
      {/* Start of Create account page */}

      <section className="overflow-y-auto w-full flex h-full items-center justify-center py-7">
        <div className="w-[450px] h-full rounded-md  px-5 scrollbar-hide">
          {/*Start of Header */}
          <h2 className="text-2xl font-bold text-center font-raleway mb-7">
            Create Account
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
              {/* confirmPassword input  block starts */}
              <article className="block mb-4">
                {/* confirmPassword input start */}
                <div className={`relative`}>
                  <input
                    type={`${showPassword ? "text" : "password"}`}
                    name="confirmPassword"
                    id="confirmPassword"
                    className=" block w-full px-4 py-2 h-[50px] font-normal bg-transparent bg-clip-padding border-2 border-solid border-backgroundGrey rounded-md transition ease-in-out m-0 placeholder:text-backgroundGrey placeholder: focus:bg-transparent focus:border-textGrey focus:outline-none"
                    placeholder="Confirm Password"
                    value={formik.values.confirmPassword}
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
                {/* confirmPassword input end */}

                {/*confirmPassword Input Error Message */}
                {formik.touched.confirmPassword &&
                  formik.errors.confirmPassword && (
                    <p className="text-xs mt-1 text-[#06CD3BC2]">
                      {formik.errors.confirmPassword}
                    </p>
                  )}
                {/* confirmPassword input block ends */}
              </article>
              {/* confirmPassword input block ends */}
            </article>

            {/* OR Divider starts*/}
            <article className="flex items-center  w-full mt-5">
              <div className="border-t border-backgroundGrey w-full"></div>
              <p className="mx-3">OR</p>
              <div className="border-t border-backgroundGrey w-full"></div>
            </article>
            {/* OR Divider ends*/}

            {/*Sign in With google starts*/}
            <article className="flex items-center justify-between w-full mt-5">
              <button
                type="button"
                className={`flex justify-center items-center px-4 h-12 w-24 grow text-white rounded-md bg-backgroundGrey border border-solid border-[#dadada26] hover:brightness-90`}
              >
                <FcGoogle fontSize="25px" className="mr-1 ml-2" />
                Google
              </button>
            </article>
            {/*Sign in With google ends*/}
            {/* Create account button starts */}
            <RedButton disabled={false} type="button">
              {loader ? <Loader /> : "Create Account"}
            </RedButton>
            {/* Create account button ends */}
          </form>
          {/* Form ends */}

          {/* Log in redirect button starts */}
          <div className="mt-7">
            <article className="flex transition-[border] duration-300 w-full  justify-center">
              <p className="">Already have an account?</p>
              <p
                className="pl-2 transition-[border] text-backgroundRed duration-300 cursor-pointer hover:underline hover:underline-offset-1"
                onClick={() => {
                  navigate("/auth/login");
                }}
              >
                Log in
              </p>
            </article>
          </div>
          {/* Log in redirect button ends */}
        </div>
      </section>
      {/* End  of Create account page */}
    </>
  );
};

export default SignUp;
