import React, { useState } from "react";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import { SiCodechef } from "react-icons/si";

import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-center items-center w-full h-82 p-12 bg-black text-yellow-500">
      <div className="flex flex-col max-w-6xl mx-auto">
        <div className="flex justify-around p-4 text-4xl mb-20 gap-x-6">
          <Link href="/">
            <div className="flex flex-col items-center gap-y-2 cursor-pointer">
              <SiCodechef className="hover:scale-110 hover:animate-bounce" />
              <p className="text-sm">All</p>
            </div>
          </Link>

          <Link href="/italian">
            <div className="flex flex-col items-center gap-y-2 cursor-pointer">
              <FaPizzaSlice className="hover:scale-110 hover:animate-bounce" />
              <p className="text-sm">Italian</p>
            </div>
          </Link>

          <Link href="/american">
            <div className="flex flex-col items-center gap-y-2 cursor-pointer">
              <FaHamburger className="hover:scale-110 hover:animate-bounce" />
              <p className="text-sm">American</p>
            </div>
          </Link>

          <Link href="/thai">
            <div className="flex flex-col items-center gap-y-2 cursor-pointer">
              <GiNoodles className="hover:scale-110 hover:animate-bounce" />
              <p className="text-sm">Thai</p>
            </div>
          </Link>

          <Link href="/chinese">
            <div className="flex flex-col items-center gap-y-2 cursor-pointer">
              <GiChopsticks className="hover:scale-110 hover:animate-bounce" />
              <p className="text-sm">Chinese</p>
            </div>
          </Link>
        </div>
        <div className="flex">
          <div className="flex items-start w-2/3">
            <h1 className="font-bold text-2xl lg:text-8xl md:text-8xl">
              Food <span className="text-white">Performance.</span>
            </h1>
          </div>
          <div className="hidden lg:flex md:flex items-center justify-center w-1/3">
            <SiCodechef className="text-[200px] rotate-45 hover:animate-spin" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
