import Button from "../components/Button"
import Form from "../components/Form"
import Header from "../components/Header"
import NavBar from "../components/NavBar"
import TextBox from "../components/TextBox"

function CadastrarCd() {
    return (
        <>
        <Header />
        <NavBar />

        <h1 className="text-[40px] text-[#005FB3] mt-30 mb-10 ml-[680px]">Cadastrar Centro de Distribuição</h1>
        <Form width="50%" margin="50px 500px">

        <label>Nome</label>
        <TextBox width="100%" type="text" color="cinza" mb="50px" placeholder="Digite o nome do Centro de Distribuição" />
        <label>CEP</label>
        <TextBox width="100%" type="text" color="cinza" mb="50px" placeholder="Digite o CEP do Centro de Distribuição" />

        <div className="text-center">
                <Button width="50%" height="53px" modo="azul" />
        </div>

        </Form>

        <div id='fundoGradient'>
            <div className='w-[938px] h-[875px] bottom-0 left-[-300px]'></div>
            <div className='w-[753px] h-[753px] top-[-100px] right-0'></div>
        </div>

        </>
    )
}

export default CadastrarCd