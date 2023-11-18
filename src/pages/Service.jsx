import Manu from "../components/Manu/Manu";
import Subscribtion from "../components/Subscribtion/Subscribtion";
import Footer from "../components/Footer/Footer";
//Icons
import { IoIosArrowForward } from "react-icons/io";
import ServiceComponent from "../components/ServiceComponent/ServiceComponent";

export default function Service() {
  return (
    <div>
      <Manu />
      <h1 className="text-2xl font-bold ml-6">Services</h1>
      <p className="ml-6"><h1 className="inline-block">Home</h1> <IoIosArrowForward className="inline-block" /> <h1 className="inline-block text-green-600">Services</h1> </p>

      <br /> <br />

      <h1 className="ml-6 text-green-600 xl">OUR AVAILABLE SERVICES</h1>
      <h1 className="ml-6 text-black text-3xl font-bold">We Provide BestWeb designe services</h1>

      <div className="mt-8 mb-6">
        <div className="flex justify-evenly">
        <ServiceComponent />
        <ServiceComponent />
        </div>
        <div className="flex justify-evenly">
        <ServiceComponent />
        <ServiceComponent />
        </div>
      </div>
      <Subscribtion />
      <Footer />
    </div>
  )
}
