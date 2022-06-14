import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Connection from "./components/connection/Connection";
import Member from "./components/member/Member";
import Project from "./components/project/Project";
import ProjectCreation from "./components/project/ProjectCreation";

const client = new ApolloClient({
  uri: "http://localhost:5050/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Connection />} />
          <Route path="/members" element={<Member />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/project/new" element={<ProjectCreation />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
