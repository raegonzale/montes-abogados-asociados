import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./components/pages/home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />


        
        <Route path="/soluciones" element={<div>Estoy en la ruta soluciones</div>} />
        <Route path="/nosotros" element={<div>Estoy en la ruta nosotros</div>} />
        <Route path="/insigths" element={<div>Estoy en la ruta insigths</div>} />
        <Route path="*" element={ <Navigate to="/"/> } />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
