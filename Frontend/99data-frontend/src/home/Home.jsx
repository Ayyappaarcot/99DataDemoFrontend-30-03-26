import Navbar from "./Navbar";
import Hero from "./Hero";
import Categories from "./Categories";
import Recommended from "./Recommended";
import FlashSale from "./FlashSale";
import Featured from "./Featured";
import Testimonials from "./Testimonials";
import Newsletter from "./Newsletter";
import Footer from "./Footer";

export default function Home() {

  return (

    <>
      <Navbar />
      <Hero />
      <Categories />
      <Recommended />
      <FlashSale />
      <Featured />
      <Testimonials />
      <Newsletter />
      <Footer />
    </>

  );

}