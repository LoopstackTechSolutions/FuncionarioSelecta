import Button from "./components/Button"
import NavBar from "./components/NavBar"
import TextBox from "./components/TextBox"
import Login from "./pages/Login"
import Home from "./pages/Home"
import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import Funcionarios from "./pages/Funcionario"
import CadastrarFuncionario from "./pages/CadastrarFuncionario"
import DashBoard from "./pages/DashBoard"
import BuscarProduto from "./pages/BuscarProduto"
import EditarFuncionario from "./pages/EditarFuncionario"
import Promocao from "./pages/Promocao"
import Clientes from "./pages/Clientes"
import EditarCliente from "./pages/EditarCliente"
import Error404 from "./pages/Error404";

function App() {

  let acesso = '';

  if (localStorage.getItem('nivelAcesso') == 'admin')
  {
    acesso = (
      <>
          <Route path="/dashBoard" element={<DashBoard />} />
          <Route path="/funcionario" element={<Funcionarios />} />
          <Route path="/funcionario/cadastrar" element={<CadastrarFuncionario />} />
          <Route path="/funcionario/editar/:id" element={<EditarFuncionario />} />
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/promocao" element={<Promocao />} />
          <Route path="/produto/buscar" element={<BuscarProduto />} />
      </>
    )
  }

  else if (localStorage.getItem('nivelAcesso') == 'gerente')
  {
    acesso = (
      <>
        <Route path="/funcionario" element={<Funcionarios />} />
        <Route path="/funcionario/cadastrar" element={<CadastrarFuncionario />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/promocao" element={<Promocao />} />
        <Route path="/produto/buscar" element={<BuscarProduto />} />
      </>
    )
  }

  else
  {
    acesso = (
      <>
        <Route path="/funcionario" element={<Funcionarios />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/promocao" element={<Promocao />} />
        <Route path="/produto/buscar" element={<BuscarProduto />} />
      </>
    )
  }

  return (
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          {acesso}

          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
  )
}

export default App
