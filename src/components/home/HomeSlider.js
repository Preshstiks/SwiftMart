import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const HomeSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
    <>
      <Slider {...settings}>
        <div>
          <img
            src="https://helloyubo.com/wp-content/uploads/2022/10/creative_fashion-2.jpg"
            alt="1"
          />
        </div>
        <div>
          <img
            src="http://www.appelcentric.com/images/demo/slider/slider_13.jpg"
            alt="1"
          />
        </div>
        <div>
          <img
            src="https://cdn5.f-cdn.com/contestentries/1399898/7003193/5b80a7ae8f6eb_thumb900.jpg"
            alt="1"
          />
        </div>
      </Slider>
    </>
  );
};

export default HomeSlider;
