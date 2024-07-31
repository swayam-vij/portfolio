import {Github, Mail} from "lucide-react"
import { FaXTwitter } from "react-icons/fa6";
const Navbar = () => {
  return (
    <nav className="flex items-end justify-end py-6 px-2">
        <div className="flex items-center justify-center gap-4">
            <Github color="white" size={36}/>
            <Mail color="white" size={36}/>
            <FaXTwitter color="white" size={36} />
        </div>
    </nav>
  )
}

export default Navbar