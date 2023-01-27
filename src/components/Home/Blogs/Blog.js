import React from 'react'
import { Link } from 'react-router-dom'
import {FaAngleRight} from "react-icons/fa"

const Blog = ({ blog }) => {
  const { _id,img, category, subCat, event, title, date } = blog
  return (
    <div>
      <Link to={`/blog/${_id}`}><img src={img} alt={title} className="md:h-[180px] lg:h-[350px] " /></Link>
      <div className='lg:px-5 flex flex-col gap-y-2 py-4'>
        <div className='text-[#8CEAFB] cursor-pointer'>
          {category} {`${subCat === "" ? "" : "●"}`} {subCat} {`${event === "" ? "" : "●"}`} {event}
        </div>
        <Link to={`/blog/${_id}`}><h4 className='text-white font-bold text-xl'>{title}</h4></Link>

        <p className='text-[#A2A0B1]'>{date}</p>
        <Link to={`/blog/${_id}`} className='gradient__text flex  text-xl font-bold  gap-x-1'>See More <FaAngleRight size={17} className="text-[#a3bf4a] mt-1"/></Link>
      </div>
    </div>
  )
}

export default Blog