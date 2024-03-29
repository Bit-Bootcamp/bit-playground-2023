import { BookOpenIcon } from "@heroicons/react/24/solid";

import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../../api/globalSlices/user.slics";

const Navbar = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  return (
    <header aria-label="Site Header" className="bg-white">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <NavLink className="block text-teal-600" href="/">
          <span className="sr-only">Home</span>
          <BookOpenIcon className="h-8 w-8 text-teal-600" />
        </NavLink>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Site Nav" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <NavLink
                  className="text-gray-500 transition hover:text-gray-500/75"
                  to="/"
                >
                  About
                </NavLink>
              </li>

              <li>
                <NavLink
                  className="text-gray-500 transition hover:text-gray-500/75"
                  to="/"
                >
                  Careers
                </NavLink>
              </li>

              <li>
                <NavLink
                  className="text-gray-500 transition hover:text-gray-500/75"
                  to="/"
                >
                  History
                </NavLink>
              </li>

              <li>
                <NavLink
                  className="text-gray-500 transition hover:text-gray-500/75"
                  to="/"
                >
                  Services
                </NavLink>
              </li>

              <li>
                <NavLink
                  className="text-gray-500 transition hover:text-gray-500/75"
                  to="/"
                >
                  Projects
                </NavLink>
              </li>

              <li>
                <NavLink
                  className="text-gray-500 transition hover:text-gray-500/75"
                  to="/"
                >
                  Blog
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              {user ? (
                <button
                  className="block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
                  onClick={(e) => {
                    localStorage.removeItem("access_token");
                    dispatch(addUser(null));
                  }}
                >
                  logout
                </button>
              ) : (
                <>
                  <Link
                    className="block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
                    to="/login"
                  >
                    Login
                  </Link>

                  <Link
                    className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 transition hover:text-teal-600/75 sm:block"
                    to="/register"
                  >
                    Register
                  </Link>
                </>
              )}
            </div>

            <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
