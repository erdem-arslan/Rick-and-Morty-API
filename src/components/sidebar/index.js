"use client"
import React, { useState } from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";

function Sidebar({ setFilterStatus }) {
  const [isStatusVisible, setStatusVisible] = useState(true);
  const [isLocationVisible, setLocationVisible] = useState(true);

  const handleOpenStatus = () => {
    setStatusVisible(!isStatusVisible);
  };

  const handleOpenLocation = () => {
    setLocationVisible(!isLocationVisible);
  };

  const handleStatusChange = (event) => {
    const { value, checked } = event.target;
    setFilterStatus(prevStatus => ({
      ...prevStatus,
      [value]: checked
    }));
  };

  const handleLocationChange = (event) => {
    const { value } = event.target;
    setFilterStatus(prevStatus => ({
      ...prevStatus,
      location: value
    }));
  };

  return (
    <div className='h-screen border-r-2 pt-16 '>
      <h2 className='mb-8 text-3xl font-semibold'>Filters</h2>
      <div>
        <div className='border-b border-opacity-50'>
          <div onClick={handleOpenStatus} className='flex justify-between items-center py-2 cursor-pointer'>
            <h1 className={`text-xl font-medium opacity-90 ${isStatusVisible ? 'underline transition' : 'no-underline'}`}>Status</h1>
            <MdKeyboardArrowRight size={25} className={`opacity-50 ${isStatusVisible ? 'rotate-90 transition' : 'transition'}`} />
          </div>
          <div className={`px-5 ${isStatusVisible ? 'lg:block' : 'hidden'}`}>
            <label className='flex items-center space-x-2 my-2'>
              <input type='checkbox' value='alive' onChange={handleStatusChange} className='w-4 h-4 border border-opacity-50 rounded-md' />
              <span className='text-gray-700'>Alive</span>
            </label>
            <label className='flex items-center space-x-2 my-2'>
              <input type='checkbox' value='dead' onChange={handleStatusChange} className='w-4 h-4 border border-opacity-50 rounded-md' />
              <span className='text-gray-700'>Dead</span>
            </label>
            <label className='flex items-center space-x-2 my-2'>
              <input type='checkbox' value='unknown' onChange={handleStatusChange} className='w-4 h-4 border border-opacity-50 rounded-md' />
              <span className='text-gray-700'>Unknown</span>
            </label>
          </div>
        </div>
        <div className='border-b border-opacity-50'>
          <div onClick={handleOpenLocation} className='flex justify-between items-center py-2 cursor-pointer'>
            <h1 className={`text-xl font-medium opacity-90 ${isLocationVisible ? 'underline transition' : 'no-underline'}`}>Location</h1>
            <MdKeyboardArrowRight size={25} className={`opacity-50 ${isLocationVisible ? 'rotate-90 transition' : 'transition'}`} />
          </div>
          <div className={`px-5 ${isLocationVisible ? 'lg:block' : 'hidden'} mb-4`}>
            <input type='text' placeholder='Enter location' onChange={handleLocationChange} className='w-full p-2 border border-opacity-50 rounded-md' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
