import { BrowserRouter, Routes, Route } from "react-router-dom";

import Connection from "./containers/connection";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Connection />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
