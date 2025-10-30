import Button from "./components/Button"
import NavBar from "./components/NavBar"
import TextBox from "./components/TextBox"
import Login from "./pages/Login"
import Home from "./pages/Home"
import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import CadastrarUsuario from "./pages/CadastrarUsuario"
import CadastrarFuncionario from "./pages/CadastrarFuncionario"

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cadastrarUsuario" element={<CadastrarUsuario />} />
          <Route path="/funcionarioCadastrar" element={<CadastrarFuncionario />} />
        </Routes>
      </Router>
  )
}

export default App
