import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useRef } from "react";

const NewArrivals = () => {
  const sliderRef = useRef(null);

  const previous = () => {
    sliderRef.current.slickPrev();
  };
  const next = () => {
    sliderRef.current.slickNext();
  };
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="container mx-auto">
      <div className=" text-center mb-[55px] my-[50px] text-[20px] text-[#051b35]">
        <div className="flex justify-center items-center gap-3">
          <h2 className="text-[30px] font-UbuntuBold relative">NEW ARRIVALS</h2>
          <div
            onClick={previous}
            className="text-white cursor-pointer bg-[#051b35] p-2"
          >
            <FaAngleLeft />
          </div>
          <div
            onClick={next}
            className="text-white cursor-pointer bg-[#051b35] p-2"
          >
            <FaAngleRight />
          </div>
        </div>
        <p className="font-UbuntuRegular">
          Some of our exclusive collections you make like.
        </p>
      </div>
      <Slider ref={sliderRef} {...settings} className="text-center">
        <div>
          <div class="w-full rounded-[10px] overflow-hidden shadow-md hover:shadow-lg px-3 pb-3">
            <div className="relative m-auto overflow-hidden w-full">
              <img
                className="w-[75%] mx-auto mb-5 transition-all duration-300 block transform scale-100 hover:scale-110"
                src="https://rukminim2.flixcart.com/image/612/612/kvfkivk0/watch/8/7/s/1-ls3034-limestone-men-original-imag8cysz7h8b4hu.jpeg?q=70"
                alt="iphone-13"
              />
              <p className="text-[#051b35] font-UbuntuRegular">
                Mesh Strap Day and Date Functioning All Black Quartz Analog
                Watch - For Men LS3034
              </p>
              <p className="text-[#E5B80B] text-[14px] font-UbuntuMedium">
                $1,200
              </p>
            </div>
            <div></div>
          </div>
        </div>
        <div>
          <div class="w-full rounded-[10px] overflow-hidden shadow-md hover:shadow-lg px-3 pb-3">
            <div className="relative m-auto overflow-hidden w-full">
              <img
                className="w-[75%] mx-auto mb-5 transition-all duration-300 block transform scale-100 hover:scale-110"
                src="https://rukminim2.flixcart.com/image/612/612/kerfl3k0pkrrdj/watch/v/s/x/2038-wh-fogg-original-imafvhvvpct6qmxb.jpeg?q=70"
                alt="iphone-13"
              />
              <p className="text-[#051b35] font-UbuntuRegular">
                2038-WH Day and Date Analog Watch - For Men 2038-WH
              </p>
              <p className="text-[#E5B80B] text-[14px] font-UbuntuMedium">
                $1,200
              </p>
            </div>
            <div></div>
          </div>
        </div>
        <div>
          <div class="w-full rounded-[10px] overflow-hidden shadow-md hover:shadow-lg px-3 pb-3">
            <div className="relative m-auto overflow-hidden w-full">
              <img
                className="w-[75%] mx-auto mb-5 transition-all duration-300 block transform scale-100 hover:scale-110"
                src="https://rukminim2.flixcart.com/image/612/612/xif0q/watch/b/e/z/1-lorem-multicolor-be-positve-analog-watch-for-men-lr60-cristen-original-imagu5kyegcbqdpm.jpeg?q=70"
                alt="iphone-13"
              />
              <p className="text-[#051b35] font-UbuntuRegular">
                LR60 Analog Watch - For Men Multicolor Quote
              </p>
              <p className="text-[#E5B80B] text-[14px] font-UbuntuMedium">
                $1,200
              </p>
            </div>
            <div></div>
          </div>
        </div>
        <div>
          <div class="w-full rounded-[10px] overflow-hidden shadow-md hover:shadow-lg px-3 pb-3">
            <div className="relative m-auto overflow-hidden w-full">
              <img
                className="w-[75%] mx-auto mb-5 transition-all duration-300 block transform scale-100 hover:scale-110"
                src="https://rukminim2.flixcart.com/image/612/612/xif0q/watch/t/f/u/1-7106-black-hmtr-men-original-imagvsgcgznejj9p.jpeg?q=70"
                alt="iphone-13"
              />
              <p className="text-[#051b35] font-UbuntuRegular">
                BLACK DAY AND DATE WORKING Analog Watch - For Men 7106-BLACK
              </p>
              <p className="text-[#E5B80B] text-[14px] font-UbuntuMedium">
                $1,200
              </p>
            </div>
            <div></div>
          </div>
        </div>
        <div>
          <div class="w-full rounded-[10px] overflow-hidden shadow-md hover:shadow-lg px-3 pb-3">
            <div className="relative m-auto overflow-hidden w-full">
              <img
                className="w-[75%] mx-auto mb-5 transition-all duration-300 block transform scale-100 hover:scale-110"
                src="https://rukminim2.flixcart.com/image/612/612/xif0q/watch/d/m/l/1-vn67-vinsu-sales-men-original-imagufhej3rxzacu.jpeg?q=70"
                alt="iphone-13"
              />
              <p className="text-[#051b35] font-UbuntuRegular">
                LR67 Analog Watch - For Men Black Dark Edition
              </p>
              <p className="text-[#E5B80B] text-[14px] font-UbuntuMedium">
                $1,200
              </p>
            </div>
            <div></div>
          </div>
        </div>
        <div>
          <div class="w-full rounded-[10px] overflow-hidden shadow-md hover:shadow-lg px-3 pb-3">
            <div className="relative m-auto overflow-hidden w-full">
              <img
                className="w-[75%] mx-auto mb-5 transition-all duration-300 block transform scale-100 hover:scale-110"
                src="https://rukminim2.flixcart.com/image/612/612/xif0q/watch/z/6/z/-original-imagxzyezuqpyprb.jpeg?q=70"
                alt="iphone-13"
              />
              <p className="text-[#051b35] font-UbuntuRegular">
                Multifunction Blue Dial Analog Watch - For Men UNG020001
              </p>
              <p className="text-[#E5B80B] text-[14px] font-UbuntuMedium">
                $1,200
              </p>
            </div>
            <div></div>
          </div>
        </div>
        <div>
          <div class="w-full rounded-[10px] overflow-hidden shadow-md hover:shadow-lg px-3 pb-3">
            <div className="relative m-auto overflow-hidden w-full">
              <img
                className="w-[75%] mx-auto mb-5 transition-all duration-300 block transform scale-100 hover:scale-110"
                src="https://rukminim2.flixcart.com/image/612/612/xif0q/watch/v/y/f/1-as000050c-allen-solly-men-original-imagsrz8n4jbwhzf.jpeg?q=70"
                alt="iphone-13"
              />
              <p className="text-[#051b35] font-UbuntuRegular">
                2023 Edition Analog Watch - For Men AS000050C
              </p>
              <p className="text-[#E5B80B] text-[14px] font-UbuntuMedium">
                $1,200
              </p>
            </div>
            <div></div>
          </div>
        </div>
        <div>
          <div class="w-full rounded-[10px] overflow-hidden shadow-md hover:shadow-lg px-3 pb-3">
            <div className="relative m-auto overflow-hidden w-full">
              <img
                className="w-[75%] mx-auto mb-5 transition-all duration-300 block transform scale-100 hover:scale-110"
                src="https://rukminim2.flixcart.com/image/612/612/xif0q/watch/u/l/b/multicolor-army-lr03-karaa-creation-men-original-imaf6ct55yzfdpqt.jpeg?q=70"
                alt="iphone-13"
              />
              <p className="text-[#051b35] font-UbuntuRegular">
                LR03 Analog Watch - For Men Multicolor Army
              </p>
              <p className="text-[#E5B80B] text-[14px] font-UbuntuMedium">
                $1,200
              </p>
            </div>
            <div></div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default NewArrivals;
