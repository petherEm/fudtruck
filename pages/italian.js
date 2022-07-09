import Head from 'next/head'
import Image from 'next/image'
import Popular from '../components/Popular'
import Veggie from '../components/Veggie'
import Header from '../components/Header'

import { motion } from 'framer-motion'
import CuisineItalian from '../components/CuisineItalian'


export default function Italian({ italian }) {
  console.log(italian.results)
  
  return (
    <div>
      <Head>
        <title>Italian Cuisine</title>
        <meta name="description" content="Italian Cuisine" />
      </Head>

      <Header />
      <CuisineItalian italian={italian} />


    </div>
  )
}

export async function getStaticProps() {

  const apiItalian = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.NEXT_PUBLIC_API_KEY}&cuisine=italian`)
 
  const italian = await apiItalian.json();

  return {
    props: {
      italian: italian,
    }
    
  }
}
