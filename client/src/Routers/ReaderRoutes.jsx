import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Blogs from '../Pages/AllBlogs'
import UserBlogs from '../Pages/UserBlogs'
import CreateBlog from '../Pages/CreateBlog'
import UpdateBlog from '../Pages/UpdateBlog'
import Blog from '../Pages/Blog'

export default function ReaderRoutes() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/allBlogs' element={<Blogs />} />
        <Route path='/userblogs' element={<UserBlogs />} />
        <Route path='/createBlog' element={<CreateBlog />} />
        <Route path='/updateBlog/:id' element={<UpdateBlog />} />
        <Route path='/blog/:id' element={<Blog />} />
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  )
}
