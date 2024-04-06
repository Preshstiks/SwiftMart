import HomeSlider from "./HomeSlider";
import MegaMenu from "./MegaMenu";

const HomeTop = () => {
  return (
    <div className="container">
      <div className="flex flex-wrap gap-0">
        <div className="w-full lg:w-1/4 md:w-1/3 pr-0 md:pr-4 sm:w-full">
          <MegaMenu />
        </div>
        <div className="w-full lg:w-3/4 md:w-2/3 sm:w-full">
          <HomeSlider />
        </div>
      </div>
    </div>
  );
};

export default HomeTop;
