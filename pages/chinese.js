import Head from 'next/head'
import Image from 'next/image'
import Popular from '../components/Popular'
import Veggie from '../components/Veggie'
import Header from '../components/Header'

import { motion } from 'framer-motion'
import CuisineChinese from '../components/CuisineChinese'


export default function Chinese({ chinese }) {
  console.log(chinese.results)
  
  return (
    <div>
      <Head>
        <title>Chinese Cuisine</title>
        <meta name="description" content="Chinese Cuisine" />
      </Head>

      <Header />
      <CuisineChinese chinese={chinese} />


    </div>
  )
}

export async function getStaticProps() {

  const apiChinese = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.NEXT_PUBLIC_API_KEY}&cuisine=chinese`)
 
  const chinese = await apiChinese.json();

  return {
    props: {
      chinese: chinese,
    }
    
  }
}
