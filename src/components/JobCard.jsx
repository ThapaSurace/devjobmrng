import React from 'react'

const JobCard = () => {
    return (
        <div className='bg-white rounded-xl border p-5'>
            <div className='pb-3'>
                <h1 className='text-gray-600 my-2'>Full-Time</h1>
                <h3 className='text-xl font-bold truncate'>
                    Senior React Developer
                </h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, possimus.</p>
                <p className='text-indigo-500 mt-5'>$70K - $80K / Year</p>
            </div>
            <div className='border border-gray-100 mb-5'></div>

            <div className='flex justify-between items-center'>
                <p className='text-orange-700 mb-3'>
                  Boston, MA
                </p>
                <button 
                className='bg-teal-600 text-white p-2 rounded-md'
                >
                    Read More
                </button>
            </div>
        </div>
    )
}

export default JobCard