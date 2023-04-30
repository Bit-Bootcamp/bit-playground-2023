import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AtSymbolIcon,
  UserCircleIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import Error from "../common/error/error";

const Register = () => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState([]);

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.confirmPassword !== formData.password)
      setErrors([...errors, "passwords didn't match"]);
  };

  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-2xl font-bold text-teal-600 sm:text-3xl">
            Welcome to our portal
          </h1>

          <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
            Register to get our application form
          </p>

          <form
            onSubmit={handleSubmit}
            className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
          >
            <p className="text-center text-lg font-medium">
              Register a new account
            </p>

            {errors.length > 0 && <Error messages={errors} />}

            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>

              <div className="relative">
                <input
                  type="email"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter email"
                  required="true"
                  name="email"
                  value={formData.email}
                  onChange={handleInput}
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <AtSymbolIcon className="h-4 w-4 text-gray-400" />
                </span>
              </div>
            </div>

            <div>
              <label htmlFor="email" className="sr-only">
                Username
              </label>

              <div className="relative">
                <input
                  type="text"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter username"
                  required="true"
                  name="username"
                  value={formData.username}
                  onChange={handleInput}
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <UserCircleIcon className="h-4 w-4 text-gray-400" />
                </span>
              </div>
            </div>

            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>

              <div className="relative">
                <input
                  type="password"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter password"
                  required="true"
                  name="password"
                  value={formData.password}
                  onChange={handleInput}
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <LockClosedIcon className="h-4 w-4 text-gray-400" />
                </span>
              </div>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="sr-only">
                Confirm password
              </label>

              <div className="relative">
                <input
                  type="password"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="re write your password"
                  required="true"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInput}
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <LockClosedIcon className="h-4 w-4 text-gray-400" />
                </span>
              </div>
            </div>

            <button
              type="submit"
              className="block w-full rounded-lg bg-teal-600 px-5 py-3 text-sm font-medium text-white"
            >
              Register
            </button>

            <p className="text-center text-sm text-gray-500">
              Already have an account?
              <Link className="underline" to="/register">
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
