import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from './paginas/Inicio';
import  SobreMim  from "./paginas/SobreMim";
import Menu from "./componentes/Menu";
import Rodape from "./componentes/Rodape";
import PaginaPadrao from "componentes/PaginaPadrao";
import Post from "paginas/Post";
import NaoEncontrada from "paginas/NaoEcontrada";
import Contato from "paginas/Contato";

function AppRoutes() {
  return (
    < BrowserRouter>
      <Menu />


      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route path="/" element={<Inicio />} />
          <Route path="sobremim" element={<SobreMim />} />
          <Route path="contato" element={<Contato/>}/>
          <Route path="*" element={<NaoEncontrada/>} />
        </Route>
        
        <Route path="posts/:id" element={<Post/>}/>
        
      </Routes>
      <Rodape />
    </BrowserRouter>
  )
}

export default AppRoutes;
