import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";

const SearchResults = () => {
  const [input, setInput] = useState("");
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  console.log(searchedRecipes);
  const recipes = searchedRecipes;

  const getSearched = async (item) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.NEXT_PUBLIC_API_KEY}&query=${item}`
    );

    const recipes = await data.json();
    setSearchedRecipes(recipes.results);
  };

  useEffect(() => {
    getSearched(searchQuery);
    console.log;
  }, [searchQuery]);

  return (
    <div className="flex flex-col max-w-6xl mx-auto mt-10">
      <form className="flex justify-center items-center">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="bg-black p-2 h-12 outline-none rounded-l-lg w-80 placeholder:text-white text-white"
          placeholder="Find your plate"
          type="text"
        />
        <div className="bg-yellow-500 h-12 px-4 flex items-center rounded-r-lg cursor-pointer">
          <FaSearch
            onClick={() => setSearchQuery(input)}
            className="text-black text-xl"
          />
        </div>
      </form>
      <h1 className="text-6xl font-bold mt-10 mb-8">Search Results</h1>
      <Splide
        options={{
          perPage: 4,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "2rem",
        }}
      >
        {recipes.map((recipe) => (
          <SplideSlide>
            <Link href={"/fullrecipe/" + recipe.id}>
              <div key={recipe.id} className="">
                <Image
                  src={
                    recipe.image
                      ? recipe.image
                      : "https://c.tenor.com/_BiwWBWhYucAAAAM/what-huh.gif"
                  }
                  width="600"
                  height="600"
                  objectFit="contain"
                  alt={recipe.title}
                  className="rounded-lg"
                />
                <p className="text-yellow-800 text-center text-lg">
                  {recipe.title}
                </p>
              </div>
            </Link>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default SearchResults;
