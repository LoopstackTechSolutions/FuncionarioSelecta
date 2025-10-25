import Button from "./components/Button"
import NavBar from "./components/NavBar"
import TextBox from "./components/TextBox"

function App() {
  return (
    <>
      <h1 className="bg-amber-500">Teste</h1>
      <TextBox border="bottom" />
      <div className="mt-5">
        <TextBox border="all" color="cinza" placeholder="teste" />
      </div>
      <Button modo="azul" width='363px' />
      <Button modo="branco" width='50%' />
      <NavBar />
    </>
  )
}

export default App
