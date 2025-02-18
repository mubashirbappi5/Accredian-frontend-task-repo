import { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png.png'
import { Button } from "@mui/material";
import { IoIosArrowDown } from "react-icons/io";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center w-full">
      <Link className=" px-4 py-2 mx-3 transition-colors duration-300 transform rounded-md hover:font-semibold">
      Refer & Earn
      </Link>
      <Link to={'/feed'} className=" px-4 py-2 mx-3 transition-colors duration-300 transform rounded-md hover:font-semibold">
      Resources
      </Link>
      <Link to={'/about'} className=" px-4 py-2 mx-3 transition-colors duration-300 transform rounded-md hover:font-semibold">
      About us
      </Link>
    </div>
  );

  return (
    <div>
      <nav className="">
        <div className="container px-6 py-4 mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src={logo} alt="" />
           <button className="px-6 py-2 bg-blue-500 text-white font-medium rounded-lg flex gap-2 items-center">Courses <IoIosArrowDown className="mt-0.5" /></button>
          </div>

          {/* Links Section */}
         

          {/* Buttons Section */}
          <div className="hidden lg:flex gap-4">
          <div className="hidden lg:flex flex-grow justify-center">{links}</div>
            <button className="bg-gray-200 text-black font-medium  px-4 py-2 rounded-lg">Log in</button>
            <Button variant="contained" style={{ textTransform: "capitalize" }}>Try for free</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-500 hover:text-gray-600 focus:outline-none"
              aria-label="toggle menu"
            >
              {isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden flex flex-col items-center w-full py-4 bg-gray-800">
            {links}
            <div className="mt-4 flex flex-col gap-2">
              <button className="bg-white text-black px-4 py-2 rounded-md w-full">Login</button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md w-full">Sign Up</button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;