import React from 'react'

const HomeCard = () => {
  return (
    <div className='grid gap-4 grid-cols-1 md:grid-cols-2'>
        <div className='border rounded-xl shadow-md p-4 bg-gray-100 space-y-4'>
            <h1 className='text-2xl font-bold'>For Developers</h1>
            <p>Browse jobs and start your career today</p>
            <button className='bg-slate-800 
            hover:bg-slate-700 
             hover:scale-110 duration-300 ease-in-out
            text-white p-2 rounded-lg 
            font-semibold'>
                Browse Jobs
            </button>
        </div>

        <div className='border rounded-xl shadow-md p-4 bg-indigo-100 space-y-4'>
            <h1 className='text-2xl font-bold'>For Employeers</h1>
            <p>List your jobs to find perfect developer for the role</p>
            <button className='bg-teal-800 hover:bg-teal-700 
            hover:scale-110 duration-300 ease-in-out
            text-white p-2 rounded-lg 
            font-semibold'>
                Add Job
            </button>
        </div>
    </div>
  )
}

export default HomeCard