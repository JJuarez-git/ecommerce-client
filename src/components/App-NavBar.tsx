import React, { useEffect, useState } from "react";
import { Button } from "flowbite-react";
import { getNavBarData } from "../services/ui.service";

const NavBar = () => {
  const [navData, setNavData] = useState<any>();

  useEffect(() => {
    getNavBarData()
      .then((v) => setNavData(v.data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <nav className="bg-white sticky w-full z-20 top-0 start-0 border-b border-gray-200 font-poppins">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="https://flowbite.com/"
          className="flex items-center space-x-2 rtl:space-x-reverse"
        >
          <img
            src={navData?.attributes.logo.data.attributes.url}
            className="h-12"
            alt="logo"
          /> 
          <img
            src={navData?.attributes.brand.data.attributes.url}
            className="h-10 hidden md:block"
            alt="consueloplaza.graphic"
          />
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Button color="primary" className="p-0 rounded-md ring-neutral-100">
            Get started
          </Button>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
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
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-light border border-gray-100 rounded-lg bg-gray-50 md:space-x-4 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
            <li>
              <a
                href="#"
                className="block py-2 px-4 rounded text-white bg-neutral-950 hover:text-gray-800 md:text-gray-800 md:bg-transparent hover:bg-neutral-100 md:hover:bg-neutral-100 after:md:bg-black after:md:block after:md:h-0.5 after:md:w-auto"
                aria-current="page"
              >
                HOME
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-4 text-gray-800 rounded hover:bg-neutral-100 md:hover:bg-neutral-100"
              >
                ABOUT
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-4 text-gray-800 rounded hover:bg-neutral-100 md:hover:bg-neutral-100"
              >
                SERVICES
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-4 text-gray-800 rounded hover:bg-neutral-100 md:hover:bg-neutral-100"
              >
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
