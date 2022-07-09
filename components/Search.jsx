import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  const [input, setInput] = useState("");


  const submitHandler = (e) => {
      e.preventDefault();
      setInput(e.target.value)

      
  }

  return (
    <div className="flex justify-center p-8">
      <form className="relative">
        <input
          value={input}
          onChange={submitHandler}
          className="bg-black p-2 h-12 outline-none rounded-lg w-80 placeholder:text-white text-white"
          placeholder="Find your plate"
          type="text"
        />
        <FaSearch className="absolute top-3 right-2 text-white text-xl cursor-pointer" />
      </form>
    </div>
  );
};

export default Search;
