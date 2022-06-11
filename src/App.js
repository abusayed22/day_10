import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Add from "./components/pages/Add";
import Read from "./components/pages/Read";



function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/read" element={<Read />} />
      </Routes>
    </div>
  );
}

export default App;
