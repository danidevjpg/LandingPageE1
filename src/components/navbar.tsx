import { useState } from "react";

function Navbar() {
  const [showPopup, setShowPopup] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <>
      <nav className="hidden md:flex lg:block bg-gray-50 border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex items-center lg:justify-between mx-auto p-4">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="Logo.svg"
              className="h-5 md:hidden lg:block"
              alt="Site Logo"
            />
            <p className="text-xl font-bold dark:text-white md:hidden lg:block">
              Nexcent
            </p>
          </a>
          <div className="w-auto">
            <ul className="font-medium flex items-baseline space-x-8 rtl:space-x-reverse">
              <li>
                <a
                  href="#"
                  className="text-gray-900 hover:text-primary  dark:text-white dark:hover:text-white"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-900 hover:text-primary  dark:text-white dark:hover:text-white"
                >
                  Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-900 hover:text-primary dark:text-white dark:hover:text-white"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-900 hover:text-primary dark:text-white dark:hover:text-white"
                >
                  Product
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-900 hover:text-primary dark:text-white dark:hover:text-white"
                >
                  Testimonial
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-900 hover:text-primary dark:text-white dark:hover:text-white"
                >
                  FAQ
                </a>
              </li>
              <li>
                <button
                  className="text-white text-sm bg-primary py-1 px-5 rounded-lg cursor-pointer hover:bg-green-700 transition hover:scale-105"
                  onClick={() => setShowPopup(true)}
                >
                  Login
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-300 bg-opacity-50">
          <div className="bg-white p-8 rounded-2xl shadow-xl w-96 relative flex flex-col items-center">
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-2xl font-bold"
              onClick={() => setShowPopup(false)}
            >
              ×
            </button>
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
              Sign In
            </h2>
            <form className="w-full space-y-6">
              <div className="flex flex-col">
                <label className="text-gray-700 font-medium mb-1">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-100 shadow-sm"
                  required
                  placeholder="Enter your email"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-gray-700 font-medium mb-1">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-100 shadow-sm"
                  required
                  placeholder="Enter your password"
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium transition-all shadow-md hover:shadow-lg"
              >
                Login
              </button>
              <p className="text-sm text-center text-gray-600 mt-4">
                Don't have an account?{" "}
                <a
                  href="#"
                  onClick={() => {
                    setShowPopup(false);
                    setShowRegister(true);
                  }}
                  className="text-green-500 hover:underline"
                >
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>
      )}
      {showRegister && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-300 bg-opacity-50">
          <div className="bg-white p-8 rounded-2xl shadow-xl w-96 relative flex flex-col items-center">
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-2xl font-bold"
              onClick={() => setShowRegister(false)}
            >
              ×
            </button>
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
              Sign Up
            </h2>
            <form className="w-full space-y-6">
              <div className="flex flex-col">
                <label className="text-gray-700 font-medium mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-100 shadow-sm"
                  required
                  placeholder="Enter your full name"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-gray-700 font-medium mb-1">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-100 shadow-sm"
                  required
                  placeholder="Enter your email"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-gray-700 font-medium mb-1">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-100 shadow-sm"
                  required
                  placeholder="Create a password"
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium transition-all shadow-md hover:shadow-lg"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export { Navbar };
