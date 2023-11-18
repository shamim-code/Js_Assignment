import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Service from "./pages/Service";
import Project from "./pages/Project";
import Testimonial from "./pages/Testimonial";

export default function App() {
  return (

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/team" element={<Team />}></Route>
      <Route path="/service" element={<Service />}></Route>
      <Route path="/project" element={<Project />}></Route>
      <Route path="/testmonial" element={<Testimonial />}></Route>
    </Routes>
    </BrowserRouter>
  )
}
