import React from "react";

const Profile = () => {
  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-2xl font-bold text-teal-600 sm:text-3xl">
            profile
          </h1>

          <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
            Please fill out the following form
          </p>

          <form
            action=""
            className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
          >
            <div>
              <label htmlFor="fullname" className="sr-only">
                Full Name
              </label>

              <input
                type="text"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                required
                placeholder="Full Name"
              />
            </div>

            <div>
              <label htmlFor="age" className="sr-only">
                Age
              </label>

              <input
                type="number"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                required
                placeholder="Age"
              />
            </div>

            <div>
              <label htmlFor="age" className="sr-only">
                Age
              </label>

              <input
                type="number"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                required
                placeholder="Age"
              />
            </div>

            <button
              type="submit"
              className="block w-full rounded-lg bg-teal-600 px-5 py-3 text-sm font-medium text-white"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Profile;
