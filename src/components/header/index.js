import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { LuArrowUpRightSquare } from "react-icons/lu";



function index() {
    return (
        <div className='bg-slate-200 flex justify-between items-center w-full fixed z-50 shadow-costum py-2 px-14'>
            <div className='flex items-center'>
                <div className='w-16 h-16'>
                    <Image src="/r-m-logo.png" alt="logo" width={100} height={100} />
                </div>
                <div>
                    <h1 className='font-semibold text-2xl'>Rick and Morty API</h1>
                </div>
            </div>
            <div className=' items-center opacity-40 flex'>
                <Link target='_blank' href={"https://rickandmortyapi.com/documentation/"}>Docs</Link>
                <Link target='_blank' href={"https://rickandmortyapi.com/documentation/"}>
                    <LuArrowUpRightSquare className='text-xl ml-1' />
                </Link>
            </div>

        </div>
    )
}

export default index