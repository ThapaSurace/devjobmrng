import React from 'react'
import Hero from '../components/Hero'
import HomeCard from '../components/HomeCard'
import JobLists from '../components/JobLists'

const Home = () => {
  return (
    <div className='max-w-6xl mx-auto px-4'>
      {/* hero section */}
      <Hero />
      <HomeCard />
      <div className='my-10'>
        <h1 className='text-2xl font-semibold mb-4'>Latest Jobs</h1>
        <JobLists />
      </div>
    </div>
  )
}

export default Home