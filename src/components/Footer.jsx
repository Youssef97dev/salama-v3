import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#000000]  flex flex-col justify-center items-center py-2  px-3 lg:px-10 lg:py-16  xl:px-40">
      <div>
        <Link href="/">
          <Image
            src="/assets/images/logo-salama-white.png"
            alt="Logo"
            width={150}
            height={150}
            className="mr-2 pb-6"
          />
        </Link>
      </div>
      <div className="w-full flex flex-col gap-5 lg:flex-row justify-between items-center  text-white text-lg">
        <div className="w-full flex flex-col justify-center items-center">
          <span>+212 675-480018</span>
          <span>reservations@lesalamamarrakech.com</span>
        </div>
        <div className="w-full flex  justify-center items-center">
          <span className="text-center">
            40 Rue des Banques, Marrakech 40000, Maroc
          </span>
        </div>
        <div className="w-full flex flex-col justify-center items-center">
          <Link
            href="https://www.instagram.com/lesalamamarrakech/"
            target="_blank"
          >
            Instagram
          </Link>
          <Link
            href="https://www.facebook.com/lesalamamarrakech/"
            target="_blank"
          >
            Facebook
          </Link>
          <Link
            href="https://www.pinterest.com/lesalamamarrakech/"
            target="_blank"
          >
            Pinterest
          </Link>
          <Link
            href="https://www.tripadvisor.fr/Restaurant_Review-g293734-d2446537-Reviews-Le_Salama_Moroccan_Soul_Food-Marrakech_Marrakech_Safi.html"
            target="_blank"
          >
            Tripadvisor
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
