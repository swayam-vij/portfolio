import {Github, Mail} from "lucide-react"
import { FaXTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="flex items-end justify-end py-6 px-2">
        <div className="flex items-center justify-center gap-4">
            <a href="https://github.com/swayam-vij" target="_blank">
              <Github color="white" size={36}/>
            </a>
            <a href="mailto:swayamvij12@gmail.com" target="_blank">
              <Mail color="white" size={36} target="_blank"/>
            </a>
            <a href="https://x.com/rustyo_0" target="_blank">
              <FaXTwitter color="white" size={36} />
            </a>
        </div>
    </nav>
  )
}

export default Navbar