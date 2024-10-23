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
import { DiPython } from 'react-icons/di';
import { TbBrandCpp } from "react-icons/tb";
import { DiJava } from 'react-icons/di';
import { BiLogoGoLang } from 'react-icons/bi';
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial: {y: -10},
    animate: {
        y: [10,-10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})


const Technology = () => { 
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <motion.h1 
            whileInView={{opacity: 1, y: 0}}
            initial={{opacity: 0, y: -100}}
            transition={{duration: 1.5}}
            className='my-20 text-center text-4xl'>Technologies</motion.h1>

            <motion.div 
            whileInView={{opacity: 1, x: 0}}
            initial={{opacity: 0, x: -100}}
            transition={{duration: 1.5}}
            className='flex flex-wrap items-center justify-center gap-4'>

            {/* Python */}
            <motion.div 
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                <DiPython className='text-7xl' style={{color: '#3776AB'}}/>
            </motion.div>

            {/* C++ */}
            <motion.div 
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                <TbBrandCpp className='text-7xl' style={{color: '#00599C'}}/>
            </motion.div>

            {/* Java */}
            <motion.div 
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                <DiJava className='text-7xl' style={{color: '#f89820'}}/>
            </motion.div>

            {/* GoLang */}
            <motion.div 
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                <BiLogoGoLang className='text-7xl' style={{color: '#00ADD8'}}/>
            </motion.div>
            
            <motion.div 
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiReactjsLine className='text-7xl text-cyan-400'/>
            </motion.div>

            <motion.div 
                variants={iconVariants(3)}
                initial="initial"
                animate="animate" 
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                <TbBrandNextjs className='text-7xl font-bold'/>
            </motion.div>

            <motion.div 
                variants={iconVariants(3.5)}
                initial="initial"
                animate="animate" 
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaNodeJs className='text-7xl text-green-500'/>
            </motion.div>

            <motion.div 
                variants={iconVariants(4)}
                initial="initial"
                animate="animate" 
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiExpress className='text-7xl'/>
            </motion.div>
            
            <motion.div 
                variants={iconVariants(4.5)}
                initial="initial"
                animate="animate" 
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiMongodb className='text-7xl text-green-500'/>
            </motion.div>

            <motion.div 
                variants={iconVariants(1.5)}
                initial="initial"
                animate="animate" 
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                <DiMysql className='text-7xl text-orange-400'/>
            </motion.div>

            <motion.div 
                variants={iconVariants(5.5)}
                initial="initial"
                animate="animate" 
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiTailwindcss className='text-7xl text-cyan-400'/>
            </motion.div>

            <motion.div 
                variants={iconVariants(1.5)}
                initial="initial"
                animate="animate" 
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                <TbBrandRedux className='text-7xl text-violet-500'/>
            </motion.div>

            <motion.div 
                variants={iconVariants(3.5)}
                initial="initial"
                animate="animate" 
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                <BsGithub className='text-7xl'/>
            </motion.div>

            <motion.div 
                variants={iconVariants(5.5)}
                initial="initial"
                animate="animate" 
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                <DiDocker className='text-7xl text-blue-400'/>
            </motion.div>

        </motion.div>
    </div>
  )
}

export default Technology