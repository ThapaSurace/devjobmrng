import React from 'react'
import JobLists from "../components/JobLists"

const Jobs = () => {
  return (
    <div className='max-w-6xl mx-auto px-4 my-10'>
       <div className='space-y-2'>
         <label htmlFor="type">Filter By Type</label>
         <select name="type" id="type">
            <option value="All-Types">All Types</option>
            <option value="Full-Time">Full-Time</option>
            <option value="Part-Time">Part-Time</option>
            <option value="Contract">Contract</option>
         </select>
       </div>

       <div className='border mt-4'></div>

       <div className='mt-6'>
        <JobLists />
       </div>
    </div>
  )
}

export default Jobs