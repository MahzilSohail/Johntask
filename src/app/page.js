import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaPenRuler } from "react-icons/fa6";
import { AiFillMedicineBox } from "react-icons/ai";
import { FaGears } from "react-icons/fa6";
import Section1 from '@/components/Section1';
import Section2 from '@/components/Section2';
import Section3 from '@/components/Section3';
import Section4 from '@/components/Section4';

function Page() {
  return (
    <div className='bg-blue-950 text-white font-serif text-[15px] min-h-screen'>
      {/* Section1 */}
      <Section1 />
      
      {/* Section2 */}
      <Section2 />
      
      {/* section3 */}
      <Section3 />
      
      {/* section 4 */}
      <Section4 />
      
    </div>
  )
}
export default Page