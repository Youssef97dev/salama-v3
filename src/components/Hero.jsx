"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { BsInstagram, BsFacebook } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";

const Hero = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <div className="relative h-screen w-full ">
      {/* Image Background */}
      <Image
        src="/assets/images/hero.jpg"
        alt="le salama main"
        width={1000}
        height={1000}
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-[#000] h-screen mix-blend-multiply opacity-40"></div>
      {/* Hero Content */}
      <div className="hidden absolute text-white w-full lg:flex justify-end items-center pr-60 py-5 gap-3 z-50">
        <Link
          href="https://www.instagram.com/lesalamamarrakech/"
          target="_blank"
          className="cursor-pointer"
        >
          <BsInstagram size={18} />
        </Link>
        <Link
          href="https://www.facebook.com/lesalamamarrakech/"
          target="_blank"
          className="cursor-pointer"
        >
          <BsFacebook size={18} />
        </Link>
        <div
          className="relative "
          onMouseLeave={() => setIsDropdownOpen(false)}
          onMouseEnter={() => setIsDropdownOpen(true)}
        >
          <button className="text-white px-4 py-2 flex justify-center items-center gap-2">
            <img src="/assets/images/english.png" className="w-7 h-7" />
            <IoMdArrowDropdown size={18} />
          </button>
          {isDropdownOpen && (
            <ul className="absolute top-8 bg-white mt-2 py-2 w-32 shadow-lg flex justify-center items-center">
              <li className="px-4 py-2 hover:bg-primary_3 rounded-lg cursor-pointer">
                <Link href="#">
                  <img src="/assets/images/english.png" className="w-7 h-7" />
                </Link>
              </li>
              <li className="px-4 py-2 hover:bg-primary_3 rounded-lg cursor-pointer">
                <Link href="/fr">
                  <img src="/assets/images/france.png" className="w-7 h-7" />
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
      <div className="z-40 absolute h-full w-full flex flex-col lg:flex-row justify-center items-center">
        <div className="flex text-white w-full lg:hidden justify-center gap-3 mb-5">
          <Link
            href="https://www.instagram.com/lesalamamarrakech/"
            target="_blank"
            className="cursor-pointer"
          >
            <BsInstagram size={18} />
          </Link>
          <Link
            href="https://www.facebook.com/lesalamamarrakech/"
            target="_blank"
            className="cursor-pointer"
          >
            <BsFacebook size={18} />
          </Link>
          <Link href="#">
            <img src="/assets/images/english.png" className="w-5 h-5" />
          </Link>
          <Link href="/fr">
            <img src="/assets/images/france.png" className="w-5 h-5" />
          </Link>
        </div>
        <Link href="/">
          <Image
            src="/assets/images/logo-salama-humberger-brown.png"
            alt="le salama 2"
            width={200}
            height={200}
            className="cursor-pointer w-40  h-40 lg:w-full lg:h-full"
          />
        </Link>
      </div>

      <div className="absolute w-full h-full flex flex-col lg:flex-row justify-end lg:justify-center items-center lg:items-end text-white text-sm md:text-lg lg:text-2xl gap-3 pb-5">
        <Link
          href="https://www.sevenrooms.com/explore/lessalamamarrakech/reservations/create/search/"
          className="z-40 rounded-full bg-primary text-white px-3 py-1 w-fit lg:w-48 text-center hover:bg-black transition-all ease-linear"
        >
          RESERVE
        </Link>
        <Link
          href="https://www.lesalamamarrakech.com/menu/lunch/"
          target="_blank"
          className="z-40 rounded-full bg-primary text-white px-3 py-1 w-fit lg:w-48 text-center hover:bg-black transition-all ease-linear"
        >
          MENU
        </Link>
      </div>
    </div>
  );
};

export default Hero;
