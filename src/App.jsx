import Button from "./components/Button"
import NavBar from "./components/NavBar"
import TextBox from "./components/TextBox"
import Login from "./pages/Login"
import Home from "./pages/Home"
import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import CadastrarUsuario from "./pages/CadastrarUsuario"
import Funcionarios from "./pages/Funcionario"
import CadastrarFuncionario from "./pages/CadastrarFuncionario"
import CentroDistribuicao from "./pages/CentroDistribuicao"
import CadastrarCd from "./pages/CadastrarCd"
import PedidoInterno from "./pages/PedidoInterno"
import DashBoard from "./pages/DashBoard"
import BuscarProduto from "./pages/BuscarProduto"
import EditarFuncionario from "./pages/EditarFuncionario"

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cadastrarUsuario" element={<CadastrarUsuario />} />
          <Route path="/dashBoard" element={<DashBoard />} />
          <Route path="/funcionario" element={<Funcionarios />} />
          <Route path="/funcionario/cadastrar" element={<CadastrarFuncionario />} />
          <Route path="/funcionario/editar/:id" element={<EditarFuncionario />} />
          <Route path="/centroDistribuicao" element={<CentroDistribuicao />} />
          <Route path="/centroDistribuicao/cadastrar" element={<CadastrarCd />} />
          <Route path="/fazerPedidoInterno" element={<PedidoInterno />} />
          <Route path="/produto/buscar" element={<BuscarProduto />} />
        </Routes>
      </Router>
  )
}

export default App
