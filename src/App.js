import { BrowserRouter, Routes, Route } from "react-router-dom";

import Connection from "./containers/connection";
import Member from "./containers/member";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Connection />} />
        <Route path="/members" element={<Member />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
