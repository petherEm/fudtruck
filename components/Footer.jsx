import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className="h-16 bg-black text-white flex justify-center items-center">
        <p className="text-xl">Developed by <Link href="https://www.piotrmaciejewski.com" target="_blank"><a className="font-bold text-yellow-500">Piotr Maciejewski.</a></Link></p>
    </div>
  )
}

export default Footer