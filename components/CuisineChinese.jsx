import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import Image from "next/image";
import Link from "next/link";

const CuisineChinese = ({ chinese }) => {

    const recipes = chinese.results;
  


  return (
    <div className="flex flex-col max-w-6xl mx-auto">
      <h1 className="text-6xl font-bold mt-10 mb-8">Chinese Cuisine</h1>
      <Splide options={{
          perPage: 4,
          arrows: false,
          pagination: false,
          drag: 'free',
          gap: '2rem'

      }}>
        {recipes.map((recipe) => (
          <SplideSlide key={recipe.id}>
            <Link href={"/fullrecipe/" + recipe.id}>
            <div className="">
              <Image
                src={recipe.image ? recipe.image : 'https://c.tenor.com/_BiwWBWhYucAAAAM/what-huh.gif'}
                width="600"
                height="600"
                objectFit="contain"
                alt={recipe.title}
                className="rounded-lg"
              />
              <p className="text-yellow-800 text-center text-lg">{recipe.title}</p>
            </div>
            </Link>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default CuisineChinese;


