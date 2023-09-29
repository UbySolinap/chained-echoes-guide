import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage.jsx";
import Basics from "./pages/Basics.jsx";
import Materials from "./pages/Materials.jsx";
import OptionalCharacters from "./pages/OptionalCharacters.jsx";
import ClanRecruits from "./pages/ClanRecruits.jsx";
import UniqueMonsters from "./pages/UniqueMonsters.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/gamebasics" element={<Basics />} />
        <Route path="/materials" element={<Materials />} />
        <Route path="/optionalcharacters" element={<OptionalCharacters />} />
        <Route path="/clanrecruits" element={<ClanRecruits />} />
        <Route path="/uniquemonsters" element={<UniqueMonsters />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
