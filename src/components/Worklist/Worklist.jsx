import { FaFacebookMessenger } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { GiSelfLove } from "react-icons/gi";
import { GiCabbage } from "react-icons/gi";
import { RiTeamFill } from "react-icons/ri";
import { FaRegHandshake,FaProjectDiagram } from "react-icons/fa";
import { BsEmojiSmile } from "react-icons/bs";


export default function Worklist() {
  return (
    <div className="p-3 bg-gray-50">
      <h1 className="text-green-600 font-bold ml-36">Work List-</h1>
      <h1 className="text-xl font-bold ml-36">We Provide the Perfect <br />Solution for you</h1>

      <br /> <br />

      <div className="flex justify-around">
        <div className="w-[200px]">
            <FaFacebookMessenger className=" text-gray-500 text-5xl p-4 bg-green-200 rounded-md" />
            <br />
            <h1 className="font-bold">Grow Your Business</h1>
            <p className="font-sans">We will help you to identify the best way to imporve your business</p>
            <br />
            <button>Learn more <FaArrowRight className="inline" /> </button>
        </div>

        <div className="w-[200px]">
            <GiSelfLove className=" text-gray-500 text-5xl p-4 bg-green-200 rounded-md" />
            <br />
            <h1 className="font-bold">Grow Your Business</h1>
            <p className="font-sans">We will help you to identify the best way to imporve your business</p>
            <br />
            <button>Learn more <FaArrowRight className="inline" /> </button>
        </div>

        <div className="w-[200px]">
            <GiCabbage className=" text-gray-500 text-5xl p-4 bg-green-200 rounded-md" />
            <br />
            <h1 className="font-bold">Grow Your Business</h1>
            <p className="font-sans">We will help you to identify the best way to imporve your business</p>
            <br />
            <button>Learn more <FaArrowRight className="inline" /> </button>
        </div>
        
      </div>
      <br /> <br />
      <div id="fan" className="flex justify-around text-center">

            <div className="shadow-md p-8">
                <RiTeamFill className="ml-4 bg-green-200 text-5xl p-1 rounded-md" />
                <h1 className="text-2xl font-bold">240452</h1>
                <p className="font-bold">Followers</p>
            </div>

            <div className="shadow-md p-8">
                <FaRegHandshake className="ml-7 bg-green-200 text-5xl p-1 rounded-md" />
                <h1 className="text-2xl font-bold">2000</h1>
                <p className="font-bold">Problem solve</p>
            </div>

            <div className="shadow-md p-8">
                <BsEmojiSmile className="ml-9 bg-green-200 text-5xl p-1 rounded-md" />
                <h1 className="text-2xl font-bold">1000</h1>
                <p className="font-bold">Happy Customer</p>
            </div>

            <div className="shadow-md p-8">
                <FaProjectDiagram className="ml-9 bg-green-200 text-5xl p-1 rounded-md" />
                <h1 className="text-2xl font-bold">1000</h1>
                <p className="font-bold">Happy Customer</p>
            </div>

        </div>
    </div>
  )
}
