"use client"

import { motion ,AnimatePresence } from "framer-motion"
import { useRouter } from 'next/navigation'

const transitionVaraiants = {
  initial: {
    x: '100%',
    width: '100%'
  },
  animate: {
    x: '0',
    width: '0'
  },
  exit: {
    x: ['0%', '100%'],
    width: ['0%', '100%'],
  },
}

const Transition = () => {
  const router = useRouter();
  return (
    <>
    <AnimatePresence mode="await">
      {/* <motion.div key={router.route} className="h-full "> */}

      <motion.div className="fixe top-0 bottom-0 right-full w-screen z-30 bg-[#2e2257]"
        variants={transitionVaraiants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.2, duration: 0.6, ease: 'easeInOut' }}>
      </motion.div>
      <motion.div className="fixe top-0 bottom-0 right-full w-screen z-20 bg-[#3b2d71]"
        variants={transitionVaraiants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.4, duration: 0.6, ease: 'easeInOut' }}>
      </motion.div>
      <motion.div className="fixe top-0 bottom-0 right-full w-screen z-10 bg-[#4b3792]"
        variants={transitionVaraiants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.6, duration: 0.6, ease: 'easeInOut' }}>
      </motion.div>
        
      {/* </motion.div> */}
    </AnimatePresence>
    </>
  );
};

export default Transition;
