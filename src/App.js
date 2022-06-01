import { BrowserRouter, Routes, Route } from "react-router-dom";

import Connection from "./components/connection/Connection";
import Member from "./components/member/Member";
import Project from "./components/project/Project";
import ProjectCreation from "./components/project/ProjectCreation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Connection />} />
        <Route path="/members" element={<Member />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/project/new" element={<ProjectCreation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
