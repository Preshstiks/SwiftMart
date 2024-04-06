import Categories from "../components/home/Categories";
import Collections from "../components/home/Collections";
import FeaturedProduct from "../components/home/FeaturedProduct";
import HomeTop from "../components/home/HomeTop";
import NewArrivals from "../components/home/NewArrival";

const Homepage = () => {
  return (
    <>
      <HomeTop />
      <FeaturedProduct />
      <NewArrivals />
      <Categories />
      <Collections />
    </>
  );
};

export default Homepage;
