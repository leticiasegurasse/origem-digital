// Definição das rotas principais
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../features/site';

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      {/* Rotas do Site Público */}
      <Route path="/" element={<Home />} />
      
      {/* Rotas do Painel (futuro) */}
      {/* <Route path="/painel/*" element={<PainelRoutes />} /> */}
    </Routes>
  </BrowserRouter>
);

export default AppRoutes; 