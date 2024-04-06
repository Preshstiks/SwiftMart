import { FaSearch } from "react-icons/fa";
import { FiBell } from "react-icons/fi";
import { TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoHome } from "react-icons/io5";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import MegaMenuMob from "../home/MegaMenuMob";

const NavMenuMob = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(true);
  };
  return (
    <>
      <div className="mb-[95px]">
        <nav class="bg-[#051b35] p-1.5 fixed top-0 left-0 right-0 z-[999]">
          <div className="container shadow-sm flex items-center flex-wrap justify-between">
            <div className="w-full md:w-1/4 flex items-center justify-between">
              <div className="flex items-center gap-6">
                <Link to="/">
                  <img
                    className="w-[140px]"
                    src="https://cdn.shopify.com/s/files/1/0787/8092/4209/files/1688278170775_1_1200x1200.png?v=1688278218"
                    alt="img"
                  />
                </Link>
                <div className="relative inline-flex">
                  <TiShoppingCart
                    size={23}
                    className="text-white cursor-pointer"
                  />
                  <span className="h-2 w-2 p-2 text-xs rounded-full absolute top-[-5px] right-[-5px] flex items-center justify-center bg-[red] text-white">
                    5
                  </span>
                </div>
              </div>
              <RxHamburgerMenu
                onClick={handleShowMenu}
                size={23}
                className="text-white cursor-pointer"
              />
            </div>
          </div>
          {showMenu && (
            <div className="h-full w-[240px] fixed top-0 left-0 z-[999999] overflow-x-hidden pt-[40px] transition-all duration-[0.1s] bg-white shadow-md">
              <div className="flex justify-end pr-4 pb-2">
                <IoClose
                  size={25}
                  className=" cursor-pointer"
                  onClick={() => setShowMenu(false)}
                />
              </div>
              <hr className="w-80 pb-3" />
              <div className="">
                <MegaMenuMob />
              </div>
            </div>
          )}
          {showMenu && (
            <div className=" block fixed h-full top-0 left-0 right-0 bottom-0 z-[99999] cursor-pointer bg-black bg-opacity-60"></div>
          )}
        </nav>
      </div>
    </>
  );
};

export default NavMenuMob;
