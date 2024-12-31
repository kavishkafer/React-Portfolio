import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import logo from "../assets/logo.png"
const NavBar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="ml-2 w-40 flex flex-shrink-0 items-center">
            { <img src={logo} alt="logo"/> }
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/kavishka-fernando99" target="_blank" rel="noopener noreferrer"><FaLinkedin/></a>
        <a href="https://github.com/kavishkafer" target="_blank" rel="noopener noreferrer"><FaGithub/></a>
        </div>
    </nav>
  )
}

export default NavBar