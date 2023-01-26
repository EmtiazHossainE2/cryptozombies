import React from 'react'
import { Link } from 'react-router-dom'
import Blog from './Blog'
import { blogData } from './blogData'

const Blogs = () => {
  return (
    <div className='container mx-auto section__padding'>
      <div>
        <h2>Latest News</h2>
        <p className='my-8 p__style'>Insights from our team, user success stories, and how to get started.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 space-x-5">
        {blogData.map((blog, index) => (
          <Blog key={index} blog={blog} />
        ))}
      </div>
      <div className='text-center my-20'>
        <div className="zombieBtn">
          <button className=''><Link to='/blogs'>View All Post</Link></button>
        </div>
      </div>
    </div>
  )
}

export default Blogs