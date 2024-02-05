import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Nce101 from "./pages/Nce101";
import Eee155 from './pages/Eee155';
import Chem161 from './pages/Chem161';
import Chem162 from "./pages/Chem162";
import Eee156 from "./pages/Eee156";
import Hum133 from "./pages/Hum133";
import Math112 from "./pages/Math112";
import Me174 from "./pages/Me174";
import Error from "./pages/Error";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>}></Route>
          <Route path="nce101" element={<Nce101/>}></Route>
          <Route path="eee155" element={<Eee155/>}></Route>
          <Route path="chem161" element={<Chem161/>}></Route>
          <Route path="chem162" element={<Chem162/>}></Route>
          <Route path="eee156" element={<Eee156/>}></Route>
          <Route path="hum133" element={<Hum133/>}></Route>
          <Route path="math112" element={<Math112/>}></Route>
          <Route path="me174" element={<Me174/>}></Route>
        </Route>
        <Route path="*" element={<Error/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
