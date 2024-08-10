import {motion} from "framer-motion"
const Hero = () => {
  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}
    className="flex flex-col items-center font-Jaro justify-center min-h-screen pb-28">
        <h1 className="text-5xl font-thin p-5 lg:text-6xl ">SWAYAM VIJ</h1>
        <span className="font-medium">SDE | FULLSTACK DEVELOPER</span>
    </motion.div>
  )
}

export default Hero