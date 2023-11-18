import FeatureProject from "../components/FeatureProject/FeatureProject";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero";
import Manu from "../components/Manu/Manu";
import Subscribtion from "../components/Subscribtion/Subscribtion";
import Worklist from "../components/Worklist/Worklist";

export default function Home() {
  return (
    <div className="bg-green-200">
      <Manu />
      <Hero />
      <Worklist />
      <FeatureProject />
      <Subscribtion />
      <Footer />
    </div>
  )
}
