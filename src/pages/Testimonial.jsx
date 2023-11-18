import Manu from "../components/Manu/Manu";
import Subscribtion from "../components/Subscribtion/Subscribtion";
import Footer from "../components/Footer/Footer";
//Icons
import { IoIosArrowForward } from "react-icons/io";
import TComponent from "../components/TestimonialComponent/TComponent";


export default function Testimonial() {
  return (
    <div>
      <Manu />
      <h1 className="text-2xl font-bold ml-6">Testimonial</h1>
      <p className="ml-6"><h1 className="inline-block">Home</h1> <IoIosArrowForward className="inline-block" /> <h1 className="inline-block text-green-600">Testimonial</h1> </p>

      <br /> <br />

      <h1 className="ml-6 text-green-600 xl">Testimonial List</h1>
      <h1 className="ml-6 text-black text-3xl font-bold">Better Agency/SEO Solution At <br /> Your Fringertips</h1>
      <br /> <br />

      <div className="p-2 grid grid-flow-row grid-cols-3 gap-4 place-items-center">
        <TComponent />
        <TComponent />
        <TComponent />
        <TComponent />
        <TComponent /> 
        <TComponent />
      </div>

      <Subscribtion />
      <Footer />
    </div>
  )
}
