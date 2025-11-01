"use client"
import React from 'react'
import { motion } from "framer-motion";

function Section1() {
  return (
    <motion.div className='flex items-center justify-between py-[20px] px-[60px]'
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}>
      <h2>NEXT JS</h2>
      <button className='bg-blue-400 w-[140px] px-7 py-2  rounded-[8px] hover:bg-blue-200 hover:text-black'>
        Cv
      </button>
    </motion.div>
  )
}

export default Section1