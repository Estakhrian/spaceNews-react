import React from 'react'
import NavBar from './Components/NavBar'
import Hero from './Components/Hero'
import NewsStories from './Components/NewsStories'
import TrendingNews from './Components/TrendingNews'
import Blog from './Components/Blog'

export default function App() {
  return (
    <div>
      <div className='bg-[#0e0e0e] min-h-screen text-white'>
        <NavBar/>
        <Hero/>
      </div>
      <div>
      <NewsStories/>
      <TrendingNews/>
      <Blog/>
      </div>
    </div>
  )
}
