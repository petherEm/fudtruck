import Head from 'next/head'
import Image from 'next/image'
import Popular from '../components/Popular'
import Veggie from '../components/Veggie'
import Header from '../components/Header'

import { motion } from 'framer-motion'
import CuisineItalian from '../components/CuisineItalian'


export default function Searched({ searched }) {
  console.log(searched.results)
  
  return (
    <div>
      <Head>
        <title>Your Fav</title>
        <meta name="description" content="Your Favourites" />
      </Head>

      <Header />
      


    </div>
  )
}

export async function getServerSideProps(searchItem) {

  const apiSearched = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.NEXT_PUBLIC_API_KEY}&query=${searchItem}`)
 
  const searched = await apiSearched.json();

  return {
    props: {
      searched: searched,
    }
    
  }
}
