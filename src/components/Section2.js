"use client"
import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { motion } from "framer-motion";

function Section2() {
  return (
    <motion.div className=' w-[90%] m-auto text-center flex flex-col gap-6 md:w-[70%] lg:w-[40%] '
      initial={{ scale: 0.5, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.7, type: "spring", stiffness: 80 }}>
      <h1 className='text-blue-300 text-4xl font-bold'>Mickey Mouse</h1>
      <h3 className='text-3xl font-bold'>Cartoon</h3>
      <p>Mickey Mouse is an American cartoon character co-created in 1928 by Walt Disney and Ub. The longtime icon and mascot of the Walt Disney Company, Mickey is an anthropomorphic mouse who typically wears red shorts, large shoes, and white gloves.</p>
      <div className=' w-[300px] m-auto flex items-center justify-between'>
        <FaFacebookSquare className='w-7 h-7 hover:text-blue-400' />
        <FaYoutube className='w-7 h-7 hover:text-blue-400' />
        <FaLinkedin className='w-7 h-7 hover:text-blue-400' />
      </div>
      <img src='/download.jpeg' alt='' className='h-[180px] w-[180px] m-auto pt-2 rounded-full' />
    </motion.div>
  )
}

export default Section2