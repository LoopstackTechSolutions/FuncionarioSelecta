import Button from "./components/Button"
import NavBar from "./components/NavBar"
import TextBox from "./components/TextBox"
import Login from "./pages/Login"
import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
  )
}

export default App
