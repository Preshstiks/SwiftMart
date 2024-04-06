import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { FiBell } from "react-icons/fi";
import { TiShoppingCart } from "react-icons/ti";
import { useState } from "react";

const NavMenuDsk = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div className="mb-[95px]">
        <nav class="flex items-center justify-center bg-[#051b35] p-2 fixed top-0 left-0 right-0 z-[999999999]">
          <div className="container shadow-sm flex items-center flex-wrap justify-between">
            <div className="w-full md:w-1/4">
              <Link to="/">
                <img
                  className="w-[170px]"
                  src="https://cdn.shopify.com/s/files/1/0787/8092/4209/files/1688278170775_1_1200x1200.png?v=1688278218"
                  alt="img"
                />
              </Link>
            </div>
            <div className="w-full md:w-1/3 flex items-center gap-2">
              <input
                className="py-2 px-4 caret-slate-400 text-slate-400 w-full bg-opacity-10 bg-white outline-none border border-white rounded-[8px]"
                type="text"
                placeholder="Search here..."
              />
              <button
                type="submit"
                className="text-[#051d35] p-[11px] cursor-pointer rounded-[8px] bg-white inline-block"
              >
                <FaSearch size={18} />
              </button>
            </div>
            <div className="w-full md:w-1/4 flex items-center md:justify-center space-x-10">
              <div
                onClick={toggleDropdown}
                className="relative inline-flex cursor-pointer"
              >
                <FiBell size={23} className="text-white" />
                <span className="h-2 w-2 p-2 text-xs rounded-full absolute top-[-5px] right-[-5px] flex items-center justify-center bg-[red] text-white">
                  5
                </span>
              </div>
              <div className="relative inline-flex">
                <TiShoppingCart
                  size={23}
                  className="text-white cursor-pointer"
                />
                <span className="h-2 w-2 p-2 text-xs rounded-full absolute top-[-5px] right-[-5px] flex items-center justify-center bg-[red] text-white">
                  5
                </span>
              </div>
              <Link className="text-white font-UbuntuRegular" to="/login">
                LOGIN
              </Link>
            </div>
          </div>
        </nav>

        {isOpen && (
          <div
            className="absolute right-0 w-48 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <div className="py-1" role="none">
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                Notification 1
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                Notification 2
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                Notification 3
              </a>
            </div>
            <div className="py-1" role="none">
              <button
                onClick={closeDropdown}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                Clear All
              </button>
              <button
                onClick={closeDropdown}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                Mark All as Read
              </button>
            </div>
            <a
              href="#"
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              View All
            </a>
          </div>
        )}
      </div>
    </>
  );
};

export default NavMenuDsk;
