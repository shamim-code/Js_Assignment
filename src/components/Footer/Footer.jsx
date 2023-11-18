import { FaFacebook,FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="flex p-2 justify-around bg-slate-900 text-white">
      <div id="one" className="w-72">
        <h1 className="text-2xl font-bold mt-1 mb-1">WEB LOGO</h1>
        <p className="mb-2 font-light">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, asperiores earum alias et iure sunt fugiat eligendi accusantium cupiditate recusandae.</p>

        <div id="social" className="flex">
            <a href="http://" target="_blank" rel="noopener noreferrer" className="mr-3 text-2xl hover:text-blue-600 hover:bg-slate-50 hover:rounded-full duration-100"><FaFacebook /></a>
            <a href="http://" target="_blank" rel="noopener noreferrer" className="mr-3 text-2xl hover:text-blue-600 hover:bg-slate-50 hover:rounded duration-100"><FaLinkedin /></a>
            <a href="http://" target="_blank" rel="noopener noreferrer" className="mr-3 text-2xl hover:text-blue-600 hover:bg-slate-50 hover:rounded duration-100"><FaSquareXTwitter /></a>

           
        </div>
        <p className="mt-2">Copyright DesignAgency 2022</p>
      </div>

      <div id="two" >
        <h1 className="text-xl font-bold mb-3">Quick Links</h1>
        <div className="flex flex-col justify-around">
            <a className="font-light" href="http://" target="_blank" rel="noopener noreferrer">LinkOne</a>
            <a className="font-light" href="http://" target="_blank" rel="noopener noreferrer">LinkTwo</a>
            <a className="font-light" href="http://" target="_blank" rel="noopener noreferrer">LinkThree</a>
        </div>
      </div>

      <div id="three">
        <h1 className="mb-3 text-xl font-bold">Address</h1>
        <p className="font-light">Designe Agency Head Office</p>
        <p className="font-light">Airport Road</p>
        <p className="font-light">United Arab Emirate</p>
      </div>

    </div>
  )
}
