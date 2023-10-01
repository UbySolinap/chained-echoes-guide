import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage.jsx";
import Basics from "./pages/Basics.jsx";
import Materials from "./pages/Materials.jsx";
import OptionalCharacters from "./pages/OptionalCharacters.jsx";
import ClanRecruits from "./pages/ClanRecruits.jsx";
import UniqueMonstersPage from "./pages/UniqueMonstersPage.jsx";
import Recruit from "./components/Recruit.jsx";
import UniqueMonster from "./components/UniqueMonster.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/gamebasics" element={<Basics />} />
        <Route path="/materials" element={<Materials />} />
        <Route path="/optionalcharacters" element={<OptionalCharacters />} />
        <Route path="/clanrecruits" element={<ClanRecruits />}>
          <Route path="/clanrecruits/:id" element={<Recruit />} />
        </Route>
        <Route path="/uniquemonsters" element={<UniqueMonstersPage />}>
          <Route path="/uniquemonsters/:id" element={<UniqueMonster />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
