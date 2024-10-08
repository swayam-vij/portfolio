import {motion} from "framer-motion"
import ecomm from "../assets/e-comm.jpg"
import minigame from "../assets/minigamelandingpage.jpg"
import todo from "../assets/todo.jpg"
const Projects = () => {

    interface projects {
        title : string,
        image : string,
        des : string,
        tech : object,
        github : string,
        live : string,
    }
    const projects = [
        {
            title : `E-commerce Website`,
            image : ecomm,
            des : `A fully functional e-commerce website for a drug store with features like product listing, shopping cart, and user authentication.`,
            tech: ["JavaScript", "React", "TailwindCSS", "MongoDB"],
            github : `https://github.com/swayam-vij/pharma-ecommerce`,
            live : `https://pharma-ecommerce.vercel.app/`,
    
        },
        {
            title : `Blogging Website`,
            image : ``,
            des : `A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.`,
            tech : ["JavaScript", "React", "TailwindCSS", "MongoDB"],
            github : ``,
            live : ``,
        },
        {
            title : `Mini-Games`,
            image : minigame,
            des : `A mini-games webiste that I built while learning Typescript. It has multiple games like Tic-Tac-Toe, Wordle and Memory Match.`,
            tech : ["TypeScript", "React", "TailwindCSS"],
            github : `https://github.com/swayam-vij/React-Mini-Games`,
            live : `https://react-mini-games-mu.vercel.app/`,
        },
        {
            title : `To-Do App`,
            image : todo,
            des : `One of my very first projects that I recently reworked on while learning Typescript. Added features like editing and complete/incomplete tag to to-do's.`,
            tech : ["TypeScript", "React", "TailwindCSS"],
            github : `https://github.com/swayam-vij/Todo`,
            live : `https://todo-seven-lake.vercel.app/`,
        }
    ]


  return (
    <div>
        <h1 className="text-center text-5xl font-Jaro lg:text-7xl p-10">Projects</h1>
        <div className=""  >
            {projects.map((project, index) => (
                <motion.div 
                    key={index} 
                    className="mb-8 flex flex-wrap lg:justify-center border-b-2"
                    >
                    <div className="w-full lg:w-1/4">
                        <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full mb-6 rounded p-2 hover:scale-110"
                        />
                    </div>
                    <div className="w-full max-w-xl lg:w-3/4 p-2">
                        <h3 className="text-2xl pb-2">{project.title}</h3>
                        <p className="pb-2">{project.des}</p>
                        {project.tech.map((technology, index) => (
                            <span key={index}
                            className="mr-2 rounded bg-neutral-300 px-2 py-1 font-medium text-gray-900">
                                {technology}
                            </span>
                        ))}
                        <div className="flex flex-row pt-4 space-x-5">
                            <a href={project.live} target="_blank">
                                <motion.button
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                                transition={{ type: "spring", stiffness: 400, damping: 17 }} 
                                className="rounded-md bg-fuchsia-300 text-black px-3 py-2 font-medium hover:bg-fuchsia-700">Live Demo</motion.button>
                            </a>
                            <a href={project.github} target="_blank">
                                <motion.button
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                                transition={{ type: "spring", stiffness: 400, damping: 17 }} 
                                className="rounded-md bg-fuchsia-300 text-black px-3 py-2 font-medium hover:bg-fuchsia-700">Souce Code</motion.button>
                            </a>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    </div>
  )
}

export default Projects