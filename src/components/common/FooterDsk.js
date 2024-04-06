import { FaInstagram, FaTwitter } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import { Link } from "react-router-dom";
import Apple from "../../assets/images/apple.png";
import Google from "../../assets/images/google.png";
const FooterDsk = () => {
  return (
    <>
      <div className="bg-[#e9e9e9] shadow-sm mt-[60px]">
        <div className="flex justify-center py-[80px]">
          <div className="container">
            <div className="flex flex-wrap">
              <div className="md:w-1/4 sm:w-1/2 w-full">
                <h1 className="text-[18px] text-black font-UbuntuBold py-2">
                  OFFICE ADDRESS
                </h1>
                <h1 className=" font-UbuntuLight">
                  1635 Franklin Street Montgomery, Near Sherwood Mall. AL 360104
                </h1>
                <h1 className=" font-UbuntuLight">
                  Email: Support@easylearningbd.com
                </h1>
                <h1 className="text-[18px] text-black font-UbuntuBold py-2">
                  SOCIAL LINKS
                </h1>
                <div className="flex items-center gap-3">
                  <ImFacebook2 className="cursor-pointer" size={20} />
                  <FaInstagram className="cursor-pointer" size={20} />
                  <FaTwitter className="cursor-pointer" size={20} />
                </div>
              </div>
              <div className="md:w-1/4 sm:w-1/2 w-full">
                <h1 className="text-[18px] text-black font-UbuntuBold py-2">
                  THE COMPANY
                </h1>
                <Link
                  className="block font-UbuntuLight hover:text-[#051b35]"
                  to="/"
                >
                  About Us
                </Link>
                <Link
                  className="block font-UbuntuLight hover:text-[#051b35]"
                  to="/"
                >
                  Company Profile
                </Link>
                <Link
                  className="block font-UbuntuLight hover:text-[#051b35]"
                  to="/"
                >
                  Contact Us
                </Link>
              </div>
              <div className="md:w-1/4 sm:w-1/2 w-full">
                <h1 className="text-[18px] text-black font-UbuntuBold py-2">
                  MORE INFO
                </h1>
                <Link
                  className="block font-UbuntuLight hover:text-[#051b35]"
                  to="/purchase"
                >
                  How To Purchase
                </Link>
                <Link
                  className="block font-UbuntuLight hover:text-[#051b35]"
                  to="/privacy"
                >
                  Privacy Policy
                </Link>
                <Link
                  className="block font-UbuntuLight hover:text-[#051b35]"
                  to="/refund_policy"
                >
                  Refund Policy
                </Link>
              </div>
              <div className="md:w-1/4 sm:w-1/2 w-full">
                <h1 className="text-[18px] text-black font-UbuntuBold py-2">
                  DOWNLOAD APPS
                </h1>
                <img
                  src={Apple}
                  className="w-[150px] cursor-pointer"
                  alt="img"
                />
                <img
                  src={Google}
                  className="w-[154px] cursor-pointer"
                  alt="img"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container py-5">
          <div className="container">
            <div className="flex flex-wrap items-center justify-center">
              <h1>© Copyright 2024 by SwiftMart, All right reserved.</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterDsk;
