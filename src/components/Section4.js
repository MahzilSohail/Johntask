"use client"
import React from 'react'
import { motion } from "framer-motion";

function Section4() {

  return (
    <motion.div className='my-[90px] mx-[70px] flex flex-col gap-4'
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 1, ease: "easeOut" }}>
      <h3 className='text-[20px] font-bold '>Services I Offer</h3>
      <p>Mickey was created as a replacement for a prior Disney character, Oswald the Lucky Rabbit. The character was originally to be named "Mortimer Mouse", until Disney's wife, Lillian, suggested "Mickey". Mickey first appeared in two 1928 shorts Plane Crazy and The Gallopin' Gaucho (which were not picked up for distribution) before his public debut in Steamboat Willie (1928).</p>
      <div className='mx-[40px] my-[20px] grid grid-cols-1 gap-7 md:grid-cols-2'>
        <img src='/img1.jpeg' className='w-[1000px] h-[210] ' />
        <img src='/img2.jpeg' className='w-[1000px] h-[210] ' />
        <img src='/images3.jpeg' className='w-[1000px] h-[210] ' />
        <img src='/images4.jpeg' className='w-[1000px] h-[210] ' />
        <img src='/images5.jpeg' className='w-[1000px] h-[210] ' />
        <img src='/images6.jpeg' className='w-[1000px] h-[210] ' />
      </div>
    </motion.div>
  )
}

export default Section4