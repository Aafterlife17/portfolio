import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home/Home";
import TechTalentHub from "./components/Project/TechTalentHub/TechTalentHub";
import ConnectEd from "./components/Project/ConnectEd/ConnectEd";
import FiveMetrix from "./components/Project/FiveMetrix/FiveMetrix";
import VisibleSolar from "./components/Project/VisibleSolar/VisibleSolar";
import Nourish from "./components/Project/Nourish/Nourish";
import Arvako from "./components/Project/Arvako/Arvako";
import EasyDrive from "./components/Project/EasyDrive/EasyDrive";
import NBHome from "./components/NavBar/NBHome";
import LeanSummits from "./components/Project/LeanSummits/LeanSummits";
import NBProjects from "./components/NavBar/NBProjects";

function App() {
  const location = useLocation();

  return (
    <div>
      {location.pathname === "/" ? <NBHome /> : <NBProjects />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/techtalenthub" element={<TechTalentHub />} />
        <Route path="/connected" element={<ConnectEd />} />
        <Route path="/fivemetrix" element={<FiveMetrix />} />
        <Route path="/nourish" element={<Nourish />} />
        <Route path="/visiblesolar" element={<VisibleSolar />} />
        <Route path="/arvako" element={<Arvako />} />
        <Route path="/easydrive" element={<EasyDrive />} />
        <Route path="/leansummits" element={<LeanSummits />} />
      </Routes>
    </div>
  );
}

export default App;
