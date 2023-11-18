import { NavLink } from "react-router-dom";
import Testimonial from './../../pages/Testimonial';


export default function Manu() {
  return (
    <div>
      <div className="navbar">
        <div className="navbar-start">
            <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                <NavLink to={"/"}>Home</NavLink></li>
                <li><NavLink to={"/team"}>Team</NavLink></li>
                <li><NavLink to={"/service"}>Serivices</NavLink></li>
                <li><NavLink to={"/project"}>Projects</NavLink></li>
                <li><NavLink to={"/testmonial"}>Testimonial</NavLink>
                </li>
            </ul>
            </div>
            <a className="btn btn-ghost text-xl text-orange-500 font-bold" href="http://localhost:5173/">DesignAgency</a>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
                <li className="ml-2 mr-2"><NavLink to={"/"}>Home</NavLink></li>
                <li className="ml-2 mr-2"><NavLink to={"/team"}>Team</NavLink></li>
                <li className="ml-2 mr-2"><NavLink to={"/service"}>Serivices</NavLink></li>
                <li className="ml-2 mr-2"><NavLink to={"/project"}>Projects</NavLink></li>
                <li className="ml-2 mr-2"><NavLink to={"/testmonial"}>Testimonial</NavLink></li>
            </ul>
        </div>
        <div className="navbar-end">
            <a className="btn mr-2 btn-outline btn-success">Login</a>
            <a className="btn mr-2 btn-success">Registration</a>
        </div>
        </div>
    </div>
  )
}
