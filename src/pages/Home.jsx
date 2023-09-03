import Banner from "../components/Banner";
import BannerReverse from "../components/BannerReverse";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Newsletter from "../components/Newsletter";
import ProudProducts from "../components/ProudProducts";
import TrendingSlider from "../components/TrendingSlider";
import Banner1 from "../img/banner/banner1.jpg";
import Banner2 from "../img/banner/banner2.jpg";

function Home() {
  return (
    <>
      <Hero />
      <ProudProducts />
      <Banner
        title="Discover diverse treasures"
        text=" Explore our online emporium for toys, electronics, and home goods – a world of endless delights."
        img={Banner1}
      />
      <TrendingSlider />
      <BannerReverse
        title="Comfortable & Elegante Living"
        text="Discover a diverse online shop offering toys, electronics, and home goods for all your needs."
        img={Banner2}
      />
      <Newsletter />
      <Footer />
    </>
  );
}

export default Home;
