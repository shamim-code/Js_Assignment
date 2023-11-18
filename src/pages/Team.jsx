import Manu from "../components/Manu/Manu";

import { IoIosArrowForward } from "react-icons/io";
import Subscribtion from "../components/Subscribtion/Subscribtion";
import Footer from "../components/Footer/Footer";
import TeamMembers from "../components/TeamMembers/TeamMembers";

export default function Team() {
  return (
    <div>
      <Manu />
      <h1 className="text-2xl font-bold ml-6">Team</h1>
      <p className="ml-6"><h1 className="inline-block">Home</h1> <IoIosArrowForward className="inline-block" /> <h1 className="inline-block text-green-600">Team</h1> </p>

      <TeamMembers />

      <Subscribtion />
      <Footer />
    </div>
  )
}
