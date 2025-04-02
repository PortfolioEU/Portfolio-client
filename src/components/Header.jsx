import React from 'react';
import { Link } from 'react-router-dom'; 
import defaultlogo from '../assets/deflogo.png'

function Header() {
  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <div className='flex'>
          <img
            src={defaultlogo}
            className="h-15"
            alt="MyLogo"
          />
          <span className="self-center text-lg text-gray-800 tracking-widest font-space-grotesk font-semibold whitespace-nowrap dark:text-white">
            OVOSolutions
          </span>
          </div>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <Link to="/login">
            <button class="relative left-1/2 top-8 h-14 w-50 translate-x-[-50%] translate-y-[-50%] transform cursor-pointer rounded-[10px] bg-gray-800 text-center text-base font-bold text-white hover:font-extrabold before:absolute before:left-0 before:top-0 before:z-[-1] before:h-full before:w-full before:origin-bottom-right before:scale-0 before:rounded-[10px] before:bg-[#ffffff3a] before:transition-transform before:duration-500 before:ease-linear before:content-[''] after:absolute after:left-0 after:top-0 after:z-[-1] after:box-border after:h-full after:w-full after:origin-bottom-right after:scale-100 after:rounded-[10px] after:border-2 after:border-solid after:border-[#fff] after:bg-transparent after:transition-transform after:duration-500 after:ease-linear after:content-[''] hover:before:origin-top-left hover:before:scale-100 hover:before:rounded-[10px] hover:before:transition-transform hover:before:duration-300 hover:before:ease-linear hover:after:origin-top-left hover:after:scale-0 hover:after:transition-transform hover:after:duration-500 hover:after:ease-linear">
              Get in touch
            </button>
            </Link>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-800 dark:border-gray-800">
            <li>
              <Link
                to="/"
                className="block py-2 px-3 text-gray-800 hover:font-extrabold bg-gray-800 rounded-sm md:bg-transparent md:text-gray-800 md:p-0 md:dark:text-blue-500"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block py-2 px-3 text-gray-800 rounded-sm hover:font-extrabold hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-800 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="block py-2 px-3 text-gray-800 rounded-sm hover:font-extrabold hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-800 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block py-2 px-3 text-gray-800 rounded-sm hover:font-extrabold hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-800 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:font-extrabold hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-800 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Testimonials
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;