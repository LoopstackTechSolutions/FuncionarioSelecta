import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";
import Form from "../components/Form";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import TextBox from "../components/TextBox";
import { useCliente } from "../hook/useCliente";
import { useEffect, useState } from "react";

export default function EditarCliente() {

    const {id} = useParams();
    const navigate = useNavigate();

    const { clientes, loading, error, buscarCliente, editarCliente } = useCliente();

    const [formData, setFormData] = useState({
        nome:'',
        email:'',
        senha:''
    });

    useEffect(() => {
        const carregar = async () => {
            const dados = await buscarCliente(id);

            setFormData({
                nome: dados.nome || '',
                email: dados.email || '',
                senha: dados.senha || ''
            });
        };
        carregar(); 
    }, [id]);

  

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
            await editarCliente({
                idCliente: id,
                ...formData
            });

            alert("Cliente editado com sucesso!");
            navigate('/clientes');
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

        <h1 className="text-[40px] text-[#005FB3] mt-20 mb-10 ml-[790px]">Editar Cliente</h1>

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

            <div className="text-center">
                <button type="submit" className="w-[50%] h-[53px] border-2 ">{loading ? 'Salvando' : 'Salvar alterações'}</button>
            </div>
            
        </Form>
        
        <div id='fundoGradient'>
            <div className='w-[938px] h-[875px] top-[-300px] left-[-300px]'></div>
            <div className='w-[753px] h-[753px] bottom-0 right-0'></div>
        </div>
        </>
    )

}