import Image from 'next/image'
import React from 'react'

function index({ image = "/placeholder.png", name, status, species, location, origin }) {
    const placeholderImage = '/placeholder.png'
    const getStatusColor = (status) => {
        switch(status.toLowerCase()) {
            case 'alive':
                return 'bg-green-500';
            case 'dead':
                return 'bg-red-700';
            case 'unknown':
            default:
                return 'bg-gray-500';
        }
    }
    return (
        <div className='bg-slate-200 flex p-1 rounded-lg w-full'>
            <div className='w-2/5 '>
                <Image src={image === null ? placeholderImage : image} alt="image" width={500} height={500} className='rounded-tl-lg rounded-bl-lg w-full h-full object-cover' />
            </div>
            <div className='w-3/5 p-4'>
                <h1 className='font-semibold text-xl'>{name}</h1>
                <div className='flex items-center'>
                    <div className={`h-3 w-3 rounded-full ${getStatusColor(status)} mr-2`}></div>
                    <p className='text-sm font-extralight'>{status} - {species}</p>
                </div>
                <div className='my-3'>
                    <p className='opacity-40'>Last known location:</p>
                    <p className='font-light'>{location}</p>
                </div>
                <div>
                    <p className='opacity-40'>First seen in:</p>
                    <p className='font-light'>{origin}</p>
                </div>
            </div>
        </div>
    )
}

export default index
