import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { FaBars, FaPhone, FaRegEnvelope } from 'react-icons/fa';
import { GoLocation } from 'react-icons/go';
import { IoPersonCircleOutline } from 'react-icons/io5';
import { TbBuilding } from 'react-icons/tb';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50">
      {/* Top Bar (Contact Info) */}
      <div className="lg:block hidden bg-[#ff7600] text-white p-2">
        <div className="container mx-auto flex items-center justify-between px-3">
          <span className="flex items-center gap-x-1">
            <GoLocation />
            <p className="text-sm">Hasseto, Addis Ababa</p>
          </span>
          <div className="flex items-center gap-x-4">
            <span className="flex items-center gap-x-1">
              <FaPhone />
              <p>+251 912 345 678</p>
            </span>
            <span className="flex items-center gap-x-1">
              <FaRegEnvelope />
              <p>support@hasseto.com</p>
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white z-50 relative">
        <div className="container mx-auto flex items-center justify-between px-3">
          {/* Logo and Brand Name */}
          <span className="flex items-center gap-x-2 z-50">
            <button className="bg-[#ff7600] text-white rounded-full w-14 h-14">
              <TbBuilding className="w-1/2 h-1/2 m-auto" />
            </button>
            <p className="font-medium text-xl">Hasseto</p>
          </span>

          {/* Hamburger Menu for Mobile */}
          <div className="lg:hidden flex items-center z-50">
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 h-[3rem] block"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {navbarOpen ? <AiOutlineClose /> : <FaBars />}
            </button>
          </div>

          {/* Navbar Links */}
          <div
            className={`lg:flex flex-grow items-center lg:h-auto h-screen lg:mb-0 mb-20 lg:static absolute top-14 left-0 w-full transition-all duration-300 ease-in-out bg-white ${
              navbarOpen ? 'block' : 'hidden'
            } lg:block`}
            style={{ zIndex: 40, mariginTop: '3rem' }} // Ensure it appears below the white bar
          >
            <ul className="lg:flex lg:flex-row flex flex-col items-center justify-center lg:gap-x-4 gap-y-4 list-none lg:ml-auto">
              <li className="py-2 flex font-medium items-center leading-snug">
                <button className="bg-[#ff7600] rounded-2xl px-4 py-1 hover:bg-[#e06b00] transition-all flex items-center gap-2">
                  Home
                </button>
              </li>
              <li className="py-2 flex font-medium items-center leading-snug">
                <a
                  href="#"
                  className="hover:text-[#ff7600] transition-all"
                >
                  About
                </a>
              </li>
              <li className="py-2 flex font-medium items-center leading-snug">
                <a
                  href="#"
                  className="hover:text-[#ff7600] transition-all"
                >
                  Listings
                </a>
              </li>
              <li className="py-2 flex font-medium items-center leading-snug">
                <a
                  href="#"
                  className="hover:text-[#ff7600] transition-all"
                >
                  Services
                </a>
              </li>
              <li className="py-2 flex font-medium items-center leading-snug">
                <a
                  href="#"
                  className="hover:text-[#ff7600] transition-all"
                >
                  Blogs
                </a>
              </li>
              {/* <li className="py-2 flex font-medium items-center leading-snug">
                <button className="py-4 flex items-center gap-2 hover:text-[#ff7600] transition-all">
                  <IoPersonCircleOutline className="text-2xl" />
                  <p>Login/Register</p>
                </button>
              </li> */}
              <li className="py-2 flex font-medium text-white items-center leading-snug">
                <button
                  className="bg-[#ff7600] rounded-2xl py-4 px-6 flex items-center gap-2 hover:bg-[#e06b00] transition-all"
                >
                  {/* <TbBuilding className="text-2xl" />
                  <p>Add Listing</p> */}
                  <IoPersonCircleOutline className="text-2xl" />
                  <p>Login/Register</p>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
