import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri"
import { SiMongodb, SiTypescript } from "react-icons/si"
import { IoLogoJavascript } from "react-icons/io5";
import { FaJava } from "react-icons/fa";
import {motion} from "framer-motion"
const TechStack = () => {
  return (
    <div className="flex flex-col items-center justify-center">
        <h1 className="text-5xl font-semibold lg:text-6xl pb-5">Tech Stack</h1>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.div 
            whileHover={{ scale: [null, 1.2, 1.2] }}
            transition={{ duration: 0.3 }}
            className="rounded-full border border-yellow-400 p-4">
                <IoLogoJavascript className="text-7xl text-yellow-400"/>
            </motion.div>
            <motion.div 
            whileHover={{ scale: [null, 1.2, 1.2] }}
            transition={{ duration: 0.3 }}
            className="rounded-full border border-green-600 p-4">
                <SiMongodb className="text-7xl text-green-6 00"/>
            </motion.div>
            <motion.div 
            whileHover={{ scale: [null, 1.2, 1.2] }}
            transition={{ duration: 0.3 }} 
            className="rounded-full border border-cyan-400 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400"/>
            </motion.div>
            <motion.div 
            whileHover={{ scale: [null, 1.2, 1.2] }}
            transition={{ duration: 0.3 }} 
            className="rounded-full border border-blue-500 p-4">
                <SiTypescript className="text-7xl text-blue-500"/>
            </motion.div>
            <motion.div 
            whileHover={{ scale: [null, 1.2, 1.2] }}
            transition={{ duration: 0.3 }} 
            className="rounded-full border border-cyan-400 p-4">
                <RiTailwindCssFill className="text-7xl text-cyan-400"/>
            </motion.div>
            <motion.div 
            whileHover={{ scale: [null, 1.2, 1.2] }}
            transition={{ duration: 0.3 }} 
            className="rounded-full border border-red-600 p-4">
                <FaJava className="text-7xl text-red-600"/>
            </motion.div>
        </div>
    </div>
  )
}

export default TechStack