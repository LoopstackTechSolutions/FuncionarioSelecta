import Button from "../components/Button";
import Form from "../components/Form";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Table from "../components/Table";
import TextBox from "../components/TextBox";
import { useFuncionarios } from "../hook/useFuncionario";
import { useState } from "react";

function CadastrarFuncionario() {
    const { funcionarios, loading, error, cadastrarFuncionario, refetch} = useFuncionarios();
    const [novoFuncionario, setNovoFuncionario] = useState(
        {Nome: '', Email: '', Senha: '', Cpf: '', NivelAcesso: ''}
    );

    const handleSubmit = async (e) => {
        e.preventDefault();

        try
        {
            await cadastrarFuncionario(novoFuncionario);
            alert("Funcionário cadastrado com sucesso!");
            setNovoFuncionario({Nome: '', Email: '', Senha: '', Cpf: '', NivelAcesso: ''});
        }

        catch (err)
        {
            alert("Erro:" + err.message);
        }
    }

    return (
        <>
        <Header />
        <NavBar />

        <h1 className="text-[40px] text-[#005FB3] mt-20 mb-10 ml-[790px]">Cadastrar Funcionário</h1>

        <Form onsubmit={handleSubmit} margin="50px 500px">

            <label>Nome</label>
            <TextBox type="text" value={novoFuncionario.Nome} 
            onChange={(e) => setNovoFuncionario({...novoFuncionario, Nome: e.target.value})} 
            color="cinza" width="100%" mb="50px" placeholder="Digite o nome" />

            <label>E-mail</label>
            <TextBox type="text" value={novoFuncionario.Email} 
            onChange={(e) => setNovoFuncionario({...novoFuncionario, Email: e.target.value})} 
            color="cinza" width="100%" mb="50px" placeholder="Digite o e-mail" />

            <label>Senha</label>
            <TextBox type="text" value={novoFuncionario.Senha} 
            onChange={(e) => setNovoFuncionario({...novoFuncionario, Senha: e.target.value})}
            color="cinza" width="100%" mb="50px" placeholder="Digite a senha" />

            <label>CPF</label>
            <TextBox type="text" value={novoFuncionario.Cpf}
            onChange={(e) => setNovoFuncionario({...novoFuncionario, Cpf: e.target.value})}
            color="cinza" width="100%" mb="50px" placeholder="Digite o CPF" />

            <label>Nível de Acesso</label>
            <select value={novoFuncionario.NivelAcesso}
            onChange={(e) => setNovoFuncionario({...novoFuncionario, NivelAcesso: e.target.value})}
            className="border-2 h-9 mb-20 border-[#7C7C7C] rounded-[5px] w-full focus:border-[#0074D9] outline-0 transition-all duration-300">
                    <option className="text-[#3d3d3d]" value="">(Selecione)</option>
                    <option className="text-[#3d3d3d]" value="gerente">Comum</option>
                    <option className="text-[#3d3d3d]" value="escritorio">Administrador</option>
                    <option className="text-[#3d3d3d]" value="logistica">Gerente</option>
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