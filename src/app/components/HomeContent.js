"use client"
import ProjectsBtn from './ProjectsBtn'
import { motion } from 'framer-motion'
import { fadeIn } from './variant'
import Avatar from './Avatar'
import ParticlesContainer from './ParticlesContainer'

const HomeContent = () => {
  return (
    <div>
      <div className="bg-primary/60 h-full">
        <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
          <div className='text-center flex flex-col justify-center items-center xl:items-start xl:pt-40 xl:text-left h-full container mx-auto mb-28'>
            <motion.h1
              variants={fadeIn('down', 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className='h1 mt-32 sm:mt-32 lg:mt-16'>
              Transforming ideas <br /> Into{' '}
              <span className='text-accent'>Digital Reality</span>
            </motion.h1>
            <motion.p
              variants={fadeIn('down', 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16'>
              Experienced Front-End Developer skilled in HTML, CSS, and JavaScript, with a passion for user-centric design. Proficient in React, Next.js, Node.js, MongoDB, and GitHub. Actively seeking opportunities to leverage my UI/UX expertise for creating captivating web interfaces and enhancing user experiences.
            </motion.p>
            <div className='flex justify-center xl:hidden relative'>
              <ProjectsBtn />
            </div>
            <motion.div variants={fadeIn('down', 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className=' hidden xl:flex'>
              <ProjectsBtn />
            </motion.div>
          </div>
        </div>
      </div>

      <div className='w-[1200px] h-full absolute right-0 bottom-0'>
        <div style={{ mixBlendMode: "lighten" }} className=" bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute  translate-z-0" >
          <ParticlesContainer />
          <motion.div
            variants={fadeIn('up', 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            transition={{ duration: 1, ease: "easeInOut" }}
            className=" w-full h-full xl:max-w-[737px] xl:max-h-[678px] lg:max-w-[450px] lg:max-h-[400px] hidden lg:block absolute -bottom-32 lg:bottom-0 lg:right-[1%] xl:right-[8%]">
            <Avatar />
          </motion.div>
        </div>
      </div>

    </div>
  )
}

export default HomeContent