import Head from 'next/head'
import Image from 'next/image'
import Popular from '../components/Popular'
import Veggie from '../components/Veggie'
import Header from '../components/Header'

import { motion } from 'framer-motion'
import CuisineAmerican from '../components/CuisineAmerican'


export default function American({ american }) {
  console.log(american.results)
  
  return (
    <div>
      <Head>
        <title>American Cuisine</title>
        <meta name="description" content="American Cuisine" />
      </Head>

      <Header />
      <CuisineAmerican american={american} />


    </div>
  )
}

export async function getStaticProps() {

  const apiAmerican = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.NEXT_PUBLIC_API_KEY}&cuisine=american`)
 
  const american = await apiAmerican.json();

  return {
    props: {
      american: american,
    }
    
  }
}
