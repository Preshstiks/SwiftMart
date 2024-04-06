import { Link } from "react-router-dom";

const SuggestedProducts = () => {
  return (
    <div className="container text-center mx-auto">
      <div className=" text-center mb-[55px] my-[50px] text-[20px] text-[#051b35]">
        <h2 className="text-[30px] font-UbuntuBold relative">
          SUGGESTED PRODUCTS
        </h2>
        <p className="font-UbuntuRegular">
          Some of our exclusive collections you make like.
        </p>
      </div>
      <div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          <Link to="productdetails">
            <div class="w-full rounded-[10px] overflow-hidden shadow-md hover:shadow-lg px-3 pb-3">
              <div className="relative m-auto overflow-hidden w-full">
                <img
                  className="w-[75%] mx-auto mb-5 transition-all duration-300 block transform scale-100 hover:scale-110"
                  src="https://rukminim2.flixcart.com/image/312/312/ktketu80/mobile/6/n/d/iphone-13-mlpg3hn-a-apple-original-imag6vpyghayhhrh.jpeg?q=70"
                  alt="iphone-13"
                />
                <p className="text-[#051b35] font-UbuntuRegular">
                  Apple iPhone 13 (Starlight, 128 GB)
                </p>
                <p className="text-[#E5B80B] text-[14px] font-UbuntuMedium">
                  $1,200
                </p>
              </div>
              <div></div>
            </div>
          </Link>
          <div class="w-full rounded-[10px] overflow-hidden shadow-md hover:shadow-lg px-3 pb-3">
            <div className="relative m-auto overflow-hidden w-full">
              <img
                className="w-[75%] mx-auto mb-5 transition-all duration-300 block transform scale-100 hover:scale-110"
                src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/k/l/l/-original-imagtc5fz9spysyk.jpeg?q=70"
                alt="iphone-15"
              />
              <p className="text-[#051b35] font-UbuntuRegular">
                Apple iPhone 15 (Blue, 128 GB)
              </p>
              <p className="text-[#E5B80B] text-[14px] font-UbuntuMedium">
                $1,500
              </p>
            </div>
            <div></div>
          </div>
          <div class="w-full rounded-[10px] overflow-hidden shadow-md hover:shadow-lg px-3 pb-3">
            <div className="relative m-auto overflow-hidden w-full">
              <img
                className="w-[75%] mx-auto mb-5 transition-all duration-300 block transform scale-100 hover:scale-110"
                src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/3/5/l/-original-imaghx9qmgqsk9s4.jpeg?q=70"
                alt="iphone-14"
              />
              <p className="text-[#051b35] font-UbuntuRegular">
                Apple iPhone 14 (Blue, 128 GB)
              </p>
              <p className="text-[#E5B80B] text-[14px] font-UbuntuMedium">
                $1,450
              </p>
            </div>
            <div></div>
          </div>
          <div class="w-full rounded-[10px] overflow-hidden shadow-md hover:shadow-lg px-3 pb-3">
            <div className="relative m-auto overflow-hidden w-full">
              <img
                className="w-[75%] mx-auto mb-5 transition-all duration-300 block transform scale-100 hover:scale-110"
                src="https://rukminim2.flixcart.com/image/312/312/kg8avm80/mobile/y/7/n/apple-iphone-12-dummyapplefsn-original-imafwg8dpyjvgg3j.jpeg?q=70"
                alt="iphone-12"
              />
              <p className="text-[#051b35] font-UbuntuRegular">
                Apple iPhone 12 (Blue, 64 GB)
              </p>
              <p className="text-[#E5B80B] text-[14px] font-UbuntuMedium">
                $1,000
              </p>
            </div>
            <div></div>
          </div>
          <div class="w-full rounded-[10px] overflow-hidden shadow-md hover:shadow-lg px-3 pb-3">
            <div className="relative m-auto overflow-hidden w-full">
              <img
                className="w-[75%] mx-auto mb-5 transition-all duration-300 block transform scale-100 hover:scale-110"
                src="https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/9/e/e/-original-imaghx9q5rvcdghy.jpeg?q=70&crop=false"
                alt="iphone-14"
              />
              <p className="text-[#051b35] font-UbuntuRegular">
                Apple iPhone 14 (Midnight, 128 GB)
              </p>
              <p className="text-[#E5B80B] text-[14px] font-UbuntuMedium">
                $1,000
              </p>
            </div>
            <div></div>
          </div>
          <div class="w-full rounded-[10px] overflow-hidden shadow-md hover:shadow-lg px-3 pb-3">
            <div className="relative m-auto overflow-hidden w-full">
              <img
                className="w-[75%] mx-auto mb-5 transition-all duration-300 block transform scale-100 hover:scale-110"
                src="https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/h/d/9/-original-imagtc2qzgnnuhxh.jpeg?q=70&crop=false"
                alt="iphone-15"
              />
              <p className="text-[#051b35] font-UbuntuRegular">
                Apple iPhone 15 (Black, 128 GB)
              </p>
              <p className="text-[#E5B80B] text-[14px] font-UbuntuMedium">
                $1,000
              </p>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuggestedProducts;
