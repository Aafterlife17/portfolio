import "./App.css";
import Home from "./components/Home/Home";
import TechTalentHub from "./components/Project/TechTalentHub/TechTalentHub";
import ConnectEd from "./components/Project/ConnectEd/ConnectEd";
import FiveMetrix from "./components/Project/FiveMetrix/FiveMetrix";
import VisibleSolar from "./components/Project/VisibleSolar/VisibleSolar";
import Nourish from "./components/Project/Nourish/Nourish";
import Arvako from "./components/Project/Arvako/Arvako";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/techtalenthub" element={<TechTalentHub />} />
        <Route path="/connected" element={<ConnectEd />} />
        <Route path="/fivemetrix" element={<FiveMetrix />} />
        <Route path="/nourish" element={<Nourish />} />
        <Route path="/visiblesolar" element={<VisibleSolar />} />
        <Route path="/arvako" element={<Arvako />} />
      </Routes>
    </div>
  );
}

export default App;
