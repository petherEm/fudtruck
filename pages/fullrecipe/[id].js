import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Header from "../../components/Header";
import { useRouter } from "next/router";

import { motion } from "framer-motion";

export default function FullRecipe() {
  const [details, setDetails] = useState({});

  const [activeTab, setActiveTab] = useState("instructions");

  const router = useRouter();
  const { id } = router.query;
  // console.log(id);

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.NEXT_PUBLIC_API_KEY}`
    );

    const detailData = await data.json();

    setDetails(detailData);
  };
  // console.log(details);

  useEffect(() => {
    fetchDetails();
  }, [id]);

  return (
    <div className="">
      <Head>
        <title>Full Recipe</title>
        <meta name="description" content="Recipe" />
      </Head>

      <Header />

      <div className="flex flex-col items-center max-w-6xl lg:p-10 md:p-10 p-4">
        <h1 className="p-4 text-2xl font-bold">{details.title}</h1>

        <div className="flex flex-col lg:flex-row md:flex-row space-x-4">
          {/* Left */}
          <div className="lg:flex-1 md:flex-1">
            <img src={details.image} alt="" />
          </div>

          {/* Right */}

          <div className="flex-1">
            <div className="flex space-x-4 p-4">
              <button
                className={
                  activeTab === "ingredients"
                    ? "bg-slate-100 p-3 rounded-lg font-semibold shadow-md"
                    : "bg-yellow-400 p-3 rounded-lg font-semibold shadow-md"
                }
                onClick={() => setActiveTab("instructions")}
              >
                Instructions
              </button>
              <button
                className={
                  activeTab === "instructions"
                    ? "bg-slate-100 p-4 rounded-lg font-semibold shadow-md"
                    : "bg-yellow-400 p-3 rounded-lg font-semibold shadow-md"
                }
                onClick={() => setActiveTab("ingredients")}
              >
                Ingredients
              </button>
            </div>

            {activeTab === "instructions" && (
              <div>
                <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
                <h3
                  dangerouslySetInnerHTML={{ __html: details.instructions }}
                ></h3>
              </div>
            )}
            {activeTab === "ingredients" && (
              <ul>
                {details.extendedIngredients.map((ingredient) => (
                  <li key={ingredient.id}>{ingredient.original}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
