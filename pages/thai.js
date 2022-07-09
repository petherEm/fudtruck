import Head from 'next/head'
import Image from 'next/image'
import Popular from '../components/Popular'
import Veggie from '../components/Veggie'
import Header from '../components/Header'

import { motion } from 'framer-motion'
import CuisineThai from '../components/CuisineThai'


export default function Thai({ thai }) {
  console.log(thai.results)
  
  return (
    <div>
      <Head>
        <title>Thai Cuisine</title>
        <meta name="description" content="Thai Cuisine" />
      </Head>

      <Header />
      <CuisineThai thai={thai} />


    </div>
  )
}

export async function getStaticProps() {

  const apiThai = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.NEXT_PUBLIC_API_KEY}&cuisine=thai`)
 
  const thai = await apiThai.json();

  return {
    props: {
      thai: thai,
    }
    
  }
}
