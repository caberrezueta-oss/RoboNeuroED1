import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./Pages/Dashboard";
import Students from "./Pages/Students";
import RobotControl from "./Pages/RobotControl";
import Settings from "./Pages/Settings";
import Sessions from "./Pages/Sessions";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/students" element={<Students />} />
        <Route path="/robot" element={<RobotControl />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/sessions" element={<Sessions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;