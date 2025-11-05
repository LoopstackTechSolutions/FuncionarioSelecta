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

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cadastrarUsuario" element={<CadastrarUsuario />} />
          <Route path="/funcionario" element={<Funcionarios />} />
          <Route path="/funcionario/cadastrar" element={<CadastrarFuncionario />} />
          <Route path="/centroDistribuicao" element={<CentroDistribuicao />} />
          <Route path="/centroDistribuicao/cadastrar" element={<CadastrarCd />} />
          <Route path="/fazerPedidoInterno" element={<PedidoInterno />} />
        </Routes>
      </Router>
  )
}

export default App
