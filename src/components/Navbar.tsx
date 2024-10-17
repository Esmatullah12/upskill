import React from "react"
import { Link } from "react-router-dom";
import logo from "../assets/upskill-logo.webp";

interface NavbarProps {
  sticky: boolean
}

const Navbar: React.FC<NavbarProps> = ({sticky}) =>{
  return (
    <nav className={`w-full mx-auto flex justify-between items-center  p-2 lg:px-36 ${!sticky} ? 'bg-white' : ''  ${sticky ? 'sticky': ''}`}>
      <Link to="/"><img className="w-24 " src={logo} alt="Upskill Logo" /></Link>
      <div className="menu">
        <ul className="flex items-center gap-8">
          <li><Link className="text-sm text-gray-500 hover:text-black" to="/learning-path">Learning Path</Link></li>
          <li><a className="text-sm text-gray-500 hover:text-black" href="">Login</a></li>
          <li className="btn rounded-full px-7 py-2 text-sm text-white"><a href="">Sign Up</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar