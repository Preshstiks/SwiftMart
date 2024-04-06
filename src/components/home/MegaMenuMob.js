import { useState } from "react";
import { CiImageOn } from "react-icons/ci";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const MegaMenuMob = () => {
  const [showMenu, setShowMenu] = useState(Array(8).fill(false));

  const handleShowMenu = (index) => {
    const updatedShowMenu = [...showMenu];
    updatedShowMenu[index] = !updatedShowMenu[index];
    setShowMenu(updatedShowMenu);
  };

  return (
    <>
      <div className="rtl w-full font-UbuntuLight h-[380px] overflow-y-auto overflow-x-hidden">
        {showMenu.map((isOpen, index) => (
          <div className="ltr" key={index}>
            <button
              onClick={() => handleShowMenu(index)}
              className="bg-white flex justify-between items-center text-[#444] p-2 w-full border-[#ddd] border-t border-b text-[14px] text-left outline-none font-UbuntuMedium transition-all duration-[0.4s] shadow-sm hover:bg-[#051b35] hover:text-white"
            >
              <div className="flex items-center gap-1">
                <CiImageOn size={20} />
                Men's Clothing
              </div>
              {isOpen ? <FaAngleLeft /> : <FaAngleRight />}
            </button>
            <div
              className={`${
                isOpen ? "block" : "hidden"
              } px-3 bg-white overflow-hidden transition-all duration-[0.2s] ease-out`}
            >
              <div className="text-[#444] hover:text-[#051b35] cursor-pointer">
                Men's Tshirt 1
              </div>
              <div className="text-[#444] hover:text-[#051b35] cursor-pointer">
                Men's Tshirt{" "}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MegaMenuMob;
