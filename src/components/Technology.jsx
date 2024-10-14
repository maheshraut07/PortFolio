import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { TbBrandNextjs } from 'react-icons/tb';
import { FaNodeJs } from 'react-icons/fa';
import { SiExpress } from 'react-icons/si';
import { SiMongodb } from 'react-icons/si';
import { DiMysql } from 'react-icons/di';
import { SiTailwindcss } from 'react-icons/si';
import { TbBrandRedux } from 'react-icons/tb';
import { BsGithub } from 'react-icons/bs';
import { DiDocker } from 'react-icons/di';

const Technology = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <h1 className='my-20 text-center text-4xl'>Technologies</h1>
        <div className='flex flex-wrap items-center justify-center gap-4'>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiReactjsLine className='text-7xl text-cyan-400'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <TbBrandNextjs className='text-7xl font-bold'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaNodeJs className='text-7xl text-green-500'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiExpress className='text-7xl'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiMongodb className='text-7xl text-green-500'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <DiMysql className='text-7xl text-orange-400'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiTailwindcss className='text-7xl text-cyan-400'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <TbBrandRedux className='text-7xl text-violet-500'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <BsGithub className='text-7xl'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <DiDocker className='text-7xl text-blue-400'/>
            </div>
        </div>
    </div>
  )
}

export default Technology