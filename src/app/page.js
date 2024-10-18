import Image from "next/image";
import Hero from "@/components/Hero";
import WtspButton from "@/components/WtspButton";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Mapbox from "@/components/Mapbox";
import Footer from "@/components/Footer";

export default function Home() {
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
}
