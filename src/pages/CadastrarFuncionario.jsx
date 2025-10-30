import Button from "../components/Button"
import Form from "../components/Form"
import Header from "../components/Header"
import NavBar from "../components/NavBar"
import TextBox from "../components/TextBox"

function CadastrarFuncionario() {
    return (
        <>
        <Header />
        <NavBar />

        <h1 className="text-[40px] text-[#005FB3] mt-20 mb-10 ml-[790px]">Cadastrar Funcionário</h1>

        <Form margin="50px 500px">

            <label>Nome</label>
            <TextBox type="text" color="cinza" width="100%" mb="50px" placeholder="Digite o nome" />

            <label>E-mail</label>
            <TextBox type="text" color="cinza" width="100%" mb="50px" placeholder="Digite o e-mail" />

            <label>Senha</label>
            <TextBox type="text" color="cinza" width="100%" mb="50px" placeholder="Digite a senha" />

            <label>CPF</label>
            <TextBox type="text" color="cinza" width="100%" mb="50px" placeholder="Digite o CPF" />

            <label>Nível de Acesso</label>
            <select className="border-2 h-9 mb-20 border-[#7C7C7C] rounded-[5px] w-full focus:border-[#0074D9] outline-0 transition-all duration-300">
                    <option className="text-[#3d3d3d]" value="">(Selecione)</option>
                    <option className="text-[#3d3d3d]" value="gerente">Gerente</option>
                    <option className="text-[#3d3d3d]" value="escritorio">Escritório</option>
                    <option className="text-[#3d3d3d]" value="logistica">Logística</option>
                </select>

            <div className="text-center">
                <Button width="50%" height="53px" modo="azul" />
            </div>
            
        </Form>
        
        <div id='fundoGradient'>
            <div className='w-[938px] h-[875px] top-[-300px] left-[-300px]'></div>
            <div className='w-[753px] h-[753px] bottom-0 right-0'></div>
        </div>
        </>
    )
}

export default CadastrarFuncionario