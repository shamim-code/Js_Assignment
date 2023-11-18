import { FaFacebook } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa6";


export default function TeamMembers() {
  return (
    <div className="h-[842px] border-box p-6">
      <h1 className="text-green-600 xl">OUR TEAM MEMBERS</h1>
      <h1 className="text-black text-3xl font-bold">Check our awesome team members.</h1>
      <br /> <br />

      <div id="members" className="flex justify-between">            
        <div className="h-[490px] w-[392px] bg-slate-100 shadow-md">
            <div className="w-[392px] h-[387px] relative">
                <img src="/images/profile.jpeg" alt="" srcset="" className="w-[100%] absolute rounded" />
                <div id="social" className="absolute top-[80%] left-36 flex justify-evenly bg-slate-200 h-6 w-24 rounded-md shadow-md">

                <CiLinkedin className="mt-1" />
                <FaFacebook className="mt-1" />
                <FaLinkedin className="mt-1" />

                </div>
            </div>
            <h1 className="text-center mt-6 text-xl font-bold">Shamim Al Mamun</h1>
        </div>

        <div className="h-[490px] w-[392px] bg-slate-100 shadow-md">
            <div className="w-[392px] h-[387px] relative">
                <img src="/images/profile.jpeg" alt="" srcset="" className="w-[100%] absolute rounded" />
                <div id="social" className="absolute top-[80%] left-36 flex justify-evenly bg-slate-200 h-6 w-24 rounded-md shadow-md">

                <CiLinkedin className="mt-1" />
                <FaFacebook className="mt-1" />
                <FaLinkedin className="mt-1" />

                </div>
            </div>
            <h1 className="text-center mt-6 text-xl font-bold">Shamim Al Mamun</h1>
        </div>

        <div className="h-[490px] w-[392px] bg-slate-100 shadow-md">
            <div className="w-[392px] h-[387px] relative">
                <img src="/images/profile.jpeg" alt="" srcset="" className="w-[100%] absolute rounded" />
                <div id="social" className="absolute top-[80%] left-36 flex justify-evenly bg-slate-200 h-6 w-24 rounded-md shadow-md">

                <CiLinkedin className="mt-1" />
                <FaFacebook className="mt-1" />
                <FaLinkedin className="mt-1" />

                </div>
            </div>
            <h1 className="text-center mt-6 text-xl font-bold">Shamim Al Mamun</h1>
        </div>

      </div>
    </div>
  )
}
