"use client"
import React from 'react'
import { FaPenRuler } from "react-icons/fa6";
import { AiFillMedicineBox } from "react-icons/ai";
import { FaGears } from "react-icons/fa6";
import Section3Card from './Section3Card';
import { motion } from "framer-motion";

function Section3() {
  return (
    <motion.div className='my-[90px] mx-[70px] flex flex-col gap-4' 
      initial={{ opacity: 0, y: 50 }}             // starting state
      whileInView={{ opacity: 1, y: 0 }}          // animate when visible
      viewport={{ once: false, amount: 0.4 }}      // trigger once when 20% visible
      transition={{ duration: 0.8, ease: "easeOut" }}>
      <h3 className='text-[20px] font-bold '>Services I Offer</h3>
      <p>Mickey was created as a replacement for a prior Disney character, Oswald the Lucky Rabbit. The character was originally to be named Mortimer Mouse, until Disney,s wife, Lillian, suggested Mickey. Mickey first appeared in two 1928 shorts Plane Crazy and The Gaucho (which were not picked up for distribution) before his public debut in Steamboat Willie (1928).</p>

      <div className='my-3 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3'>
        <Section3Card
          icon={<FaPenRuler className='w-7 h-7' />}
          title={"MICKEY MOUSE"}
          content={"Mickey also appears in media such as video games as well as merchandising and is a meetable character at the Disney parks. He is one of the world's most recognizable fictional characters."}
          subtitle={"mickey_mouse"} />

        <Section3Card
          icon={<AiFillMedicineBox className='w-7 h-7' />}
          title={"Mickey Mouse"}
          content={"Mickey also appears in media such as video games as well as merchandising and is a meetable character at the Disney parks. He is one of the world's most recognizable fictional characters."}
          subtitle={"mickey_mouse"} />

        <Section3Card
          icon={<FaGears className='w-8 h-8' />}
          title={"mickey mouse"}
          content={"Mickey also appears in media such as video games as well as merchandising and is a meetable character at the Disney parks. He is one of the world's most recognizable fictional characters."}
          subtitle={"mickey_mouse"} />

      </div>
    </motion.div>
  )
}

export default Section3