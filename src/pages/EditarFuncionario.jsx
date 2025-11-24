import Button from "../components/Button";
import Form from "../components/Form";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import TextBox from "../components/TextBox";
import { useFuncionarios } from "../hook/useFuncionario";
import { useState } from "react";

export default function EditarFuncionario({funcionario}) {

    const { editarFuncionario, loading } = useFuncionarios();

    const [formData, setFormData] = useState({
        nome: funcionario.nome,
        email: funcionario.email,
        senha: funcionario.senha,
        cpf: funcionario.cpf,
        nivelAcesso: funcionario.nivelAcesso
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try
        {
            await editarFuncionario(funcionario.id, formData);
            alert("Funcionário editado com sucesso!");
        }

        catch (err)
        {
            alert("Erro ao editar:" + err.message);
        }
    }

    return (
        <>
        <Header />
        <NavBar />

        <h1 className="text-[40px] text-[#005FB3] mt-20 mb-10 ml-[790px]">Editar Funcionário</h1>

        <Form onsubmit={handleSubmit} margin="50px 500px">

            <label>Nome</label>
            <TextBox type="text" value={formData.nome} 
            onchange={handleChange} 
            color="cinza" width="100%" mb="50px" placeholder="Digite o nome" />

            <label>E-mail</label>
            <TextBox type="text" value={formData.email} 
            onchange={handleChange} 
            color="cinza" width="100%" mb="50px" placeholder="Digite o e-mail" />

            <label>Senha</label>
            <TextBox type="text" value={formData.senha} 
            onchange={handleChange}
            color="cinza" width="100%" mb="50px" placeholder="Digite a senha" />

            <label>CPF</label>
            <TextBox type="text" value={formData.cpf}
            onchange={handleChange}
            color="cinza" width="100%" mb="50px" placeholder="Digite o CPF" />

            <label>Nível de Acesso</label>
            <select value={formData.nivelAcesso}
            onChange={handleChange}
            className="border-2 h-9 mb-20 border-[#7C7C7C] rounded-[5px] w-full focus:border-[#0074D9] outline-0 transition-all duration-300">
                    <option className="text-[#3d3d3d]" value="">(Selecione)</option>
                    <option className="text-[#3d3d3d]" value="gerente">Comum</option>
                    <option className="text-[#3d3d3d]" value="escritorio">Administrador</option>
                    <option className="text-[#3d3d3d]" value="logistica">Gerente</option>
            </select>

            <div className="text-center">
                <Button submit="true" width="50%" height="53px" modo="azul" texto={loading ? 'Salvando' : 'Salvar alterações'} />
            </div>
            
        </Form>
        
        <div id='fundoGradient'>
            <div className='w-[938px] h-[875px] top-[-300px] left-[-300px]'></div>
            <div className='w-[753px] h-[753px] bottom-0 right-0'></div>
        </div>
        </>
    )

}