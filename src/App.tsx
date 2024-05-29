import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './paginas/home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import ListaCategorias from './components/categorias/lista_categorias/ListaCategorias';
import FormularioCategoria from './components/categorias/formulario_categorias/FormularioCategorias';
import DeletarCategoria from './components/categorias/deletar_tema/DeletarTema';
import './App.css';
import '@fontsource/ubuntu-sans';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className='min-h-[80vh]'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/categorias" element={<ListaCategorias />} />
            <Route path="/cadastroCategoria" element={<FormularioCategoria />} />
            <Route path="/editarCategoria/:id" element={<FormularioCategoria />} />
            <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}
export default App;