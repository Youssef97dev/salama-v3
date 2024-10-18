import Hero from "./components/Hero";
import About from "./components/About";
import WtspButton from "@/components/WtspButton";
import Gallery from "./components/Gallery";
import Mapbox from "@/components/Mapbox";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <div className="">
      <Hero />
      <About />
      <Gallery />
      <Mapbox />
      <Footer />
      <WtspButton />
    </div>
  );
};

export default page;
