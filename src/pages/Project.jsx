import Manu from "../components/Manu/Manu";
import Subscribtion from "../components/Subscribtion/Subscribtion";
import Footer from "../components/Footer/Footer";
//Icons
import { IoIosArrowForward } from "react-icons/io";
import ProjectComponent from "../components/ProjectComponent/ProjectComponent";

export default function Project() {
  return (
    <div>
      <Manu />
      <h1 className="text-2xl font-bold ml-6">Projects</h1>
      <p className="ml-6"><h1 className="inline-block">Home</h1> <IoIosArrowForward className="inline-block" /> <h1 className="inline-block text-green-600">Projects</h1> </p>

      <br /> <br />

      <h1 className="ml-6 text-green-600 xl">OUR PROJECT</h1>
      <h1 className="ml-6 text-black text-3xl font-bold">Better Agency/SEO Solution At <br /> Your Fringertips</h1>

      <div className="p-2 grid grid-flow-row grid-cols-2 gap-4 place-items-center">
        <ProjectComponent />
        <ProjectComponent />
        <ProjectComponent />
        <ProjectComponent />
      </div>

      <Subscribtion />
      <Footer />
    </div>
  )
}
