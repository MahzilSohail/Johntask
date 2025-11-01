import React from 'react'

function Section3Card({icon, title, content, subtitle}) {
    return (
        <div>
        <div className='bg-white text-blue-950 flex flex-col items-center px-5 py-6  rounded-[10px] gap-4'>
            {icon}
            <span>{title} </span>
            <p>{content} </p>
            <span>{subtitle}</span>
        </div>
        </div>
        
    )
}

export default Section3Card