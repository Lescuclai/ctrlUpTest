import { BrowserRouter, Routes, Route } from "react-router-dom";

import Connection from "./containers/connection";
import Member from "./containers/member";
import Project from "./containers/project";
import ProjectCreation from "./containers/projectCreation";

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
