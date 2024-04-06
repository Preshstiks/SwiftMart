const Categories = () => {
  return (
    <div className="container mx-auto">
      <div className=" text-center mb-[55px] my-[50px] text-[20px] text-[#051b35]">
        <h2 className="text-[30px] font-UbuntuBold relative">CATEGORIES</h2>
        <p className="font-UbuntuRegular">
          Some of our exclusive collections you make like.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
        <div class="w-full h-full rounded-[10px] overflow-hidden hover:shadow-lg  shadow-md text-center px-3 pb-3">
          <img
            className="w-[100px] mx-auto "
            src="https://rukminim2.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100"
            alt="mobile"
          />
          <h1 className="text-black font-UbuntuMedium text-[13px]">
            Top Offers
          </h1>
        </div>
        <div class="w-full h-full rounded-[10px] overflow-hidden hover:shadow-lg  shadow-md text-center px-3 pb-3">
          <img
            className="w-[100px] mx-auto "
            src="https://rukminim2.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100"
            alt="mobile"
          />
          <h1 className="text-black font-UbuntuMedium text-[13px]">
            Groceries
          </h1>
        </div>
        <div class="w-full h-full rounded-[10px] overflow-hidden hover:shadow-lg  shadow-md text-center px-3 pb-3">
          <img
            className="w-[100px] mx-auto "
            src="https://rukminim2.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100"
            alt="mobile"
          />
          <h1 className="text-black font-UbuntuMedium text-[13px]">Mobile</h1>
        </div>
        <div class="w-full h-full rounded-[10px] overflow-hidden hover:shadow-lg  shadow-md text-center px-3 pb-3">
          <img
            className="w-[100px] mx-auto "
            src="https://rukminim2.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100"
            alt="mobile"
          />
          <h1 className="text-black font-UbuntuMedium text-[13px]">Fashion</h1>
        </div>
        <div class="w-full h-full rounded-[10px] overflow-hidden hover:shadow-lg  shadow-md text-center px-3 pb-3">
          <img
            className="w-[100px] mx-auto "
            src="https://rukminim2.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100"
            alt="mobile"
          />
          <h1 className="text-black font-UbuntuMedium text-[13px]">
            Electronics
          </h1>
        </div>
        <div class="w-full h-full rounded-[10px] overflow-hidden hover:shadow-lg  shadow-md text-center px-3 pb-3">
          <img
            className="w-[100px] mx-auto "
            src="https://rukminim2.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100"
            alt="mobile"
          />
          <h1 className="text-black font-UbuntuMedium text-[13px]">Home</h1>
        </div>
        <div class="w-full h-full rounded-[10px] overflow-hidden hover:shadow-lg  shadow-md text-center px-3 pb-3">
          <img
            className="w-[100px] mx-auto "
            src="https://rukminim2.flixcart.com/fk-p-flap/128/128/image/0139228b2f7eb413.jpg?q=100"
            alt="mobile"
          />
          <h1 className="text-black font-UbuntuMedium text-[13px]">
            Appliances
          </h1>
        </div>
        <div class="w-full h-full rounded-[10px] overflow-hidden hover:shadow-lg  shadow-md text-center px-3 pb-3">
          <img
            className="w-[100px] mx-auto "
            src="https://rukminim2.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100"
            alt="mobile"
          />
          <h1 className="text-black font-UbuntuMedium text-[13px]">
            Beauty, Toys & More
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Categories;
