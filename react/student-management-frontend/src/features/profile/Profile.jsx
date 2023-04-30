import React, { useState } from "react";

const Profile = () => {
  const [formData, setFormData] = useState({});

  const handleInput = (e) => {
    if (e.target.name.includes(".")) {
      const [parent, child] = e.target.name.split(".");
      setFormData({
        ...formData,
        [parent]: { ...formData[parent], [child]: e.target.value },
      });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

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
            onSubmit={handleSubmit}
            className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
          >
            <div>
              <label htmlFor="fullname" className="sr-only">
                Full Name
              </label>

              <input
                type="text"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Full Name"
                required={true}
                name="fullName"
                value={formData.fullName}
                onChange={handleInput}
              />
            </div>

            <div>
              <label htmlFor="age" className="sr-only">
                Age
              </label>

              <input
                type="number"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Age"
                required={true}
                name="age"
                value={formData.age}
                onChange={handleInput}
              />
            </div>

            <div>
              <label htmlFor="city" className="sr-only">
                City
              </label>

              <input
                type="text"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="City"
                required={true}
                name="address.city"
                value={formData.address?.city}
                onChange={handleInput}
              />
            </div>

            <div>
              <label htmlFor="street" className="sr-only">
                Street
              </label>

              <input
                type="text"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Street"
                required={true}
                name="address.street"
                value={formData.address?.street}
                onChange={handleInput}
              />
            </div>

            <div>
              <label htmlFor="house" className="sr-only">
                House Number
              </label>

              <input
                type="text"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="House number"
                required={true}
                name="address.houseNumber"
                value={formData.address?.houseNumber}
                onChange={handleInput}
              />
            </div>

            <div>
              <label htmlFor="phone" className="sr-only">
                Phone Number
              </label>

              <input
                type="text"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Phone number"
                required={true}
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInput}
              />
            </div>

            <div>
              <label className="mr-4">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={true}
                  onChange={() => {
                    setFormData({ ...formData, gender: "male" });
                  }}
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={true}
                  onChange={() => {
                    setFormData({ ...formData, gender: "female" });
                  }}
                />
                Female
              </label>
            </div>

            <div>
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="file_input"
              >
                Headshot photo
              </label>
              <input
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                id="file_input"
                type="file"
                accept="image/*"
              />
            </div>

            <div>
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="multiple"
              >
                Documents
              </label>
              <input
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                id="multiple"
                type="file"
                accept="image/*"
                multiple={true}
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
