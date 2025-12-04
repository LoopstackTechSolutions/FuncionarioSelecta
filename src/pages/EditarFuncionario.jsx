import { useParams } from "react-router-dom";
import Button from "../components/Button";
import Form from "../components/Form";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import TextBox from "../components/TextBox";
import { useFuncionarios } from "../hook/useFuncionario";
import { useEffect, useState } from "react";

export default function EditarFuncionario() {

    const {id} = useParams();
    const { funcionarios, editarFuncionario, loading } = useFuncionarios();

    const funcionario = funcionarios.find(f => f.idFuncionario == id);

    const [formData, setFormData] = useState({
        nome:'',
        email:'',
        senha:'',
        cpf:'',
        nivelAcesso:''
    });

    useEffect(() => {
        if (funcionario) {
            setFormData({
                nome: funcionario?.nome || '',
                email: funcionario?.email || '',
                senha: funcionario?.senha || '',
                cpf: funcionario?.cpf || '',
                nivelAcesso: funcionario?.nivelAcesso || ''
            });
        }
            
    }, [funcionario]);

  

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
            await editarFuncionario(funcionario.idFuncionario, formData);
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

        <Form onSubmit={handleSubmit} margin="50px 500px">

            <label>Nome</label>
            <TextBox type="text" value={formData.nome} name="nome"
            onChange={handleChange} 
            color="cinza" width="100%" mb="50px" placeholder="Digite o nome" />

            <label>E-mail</label>
            <TextBox type="text" value={formData.email} name="email"
            onChange={handleChange} 
            color="cinza" width="100%" mb="50px" placeholder="Digite o e-mail" />

            <label>Senha</label>
            <TextBox type="text" value={formData.senha} name="senha"
            onChange={handleChange}
            color="cinza" width="100%" mb="50px" placeholder="Digite a senha" />

            <label>CPF</label>
            <TextBox type="text" value={formData.cpf} name="cpf"
            onChange={handleChange}
            color="cinza" width="100%" mb="50px" placeholder="Digite o CPF" />

            <label>Nível de Acesso</label>
            <select value={formData.nivelAcesso}
            name="nivelAcesso"
            onChange={handleChange}
            className="border-2 h-9 mb-20 border-[#7C7C7C] rounded-[5px] w-full focus:border-[#0074D9] outline-0 transition-all duration-300">
                    <option className="text-[#3d3d3d]" value="">(Selecione)</option>
                    <option className="text-[#3d3d3d]" value="comum">Comum</option>
                    <option className="text-[#3d3d3d]" value="admin">Administrador</option>
                    <option className="text-[#3d3d3d]" value="gerente">Gerente</option>
            </select>

            <div className="text-center">
                <button type="submit" className="w-[50%] h-[53px] border-2 rounded-2xl bg-[#0074D9] text-white hover:bg-[#005aa8] hover:transform hover:scale-[1.1] transition-all duration-300'">{loading ? 'Salvar alterações' : 'Salvando'}</button>
            </div>
            
        </Form>
        
        <div id='fundoGradient'>
            <div className='w-[938px] h-[875px] top-[-300px] left-[-300px]'></div>
            <div className='w-[753px] h-[753px] bottom-0 right-0'></div>
        </div>
        </>
    )

}