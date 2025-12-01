import Button from "../components/Button";
import logo from "../assets/img/logo.png";
import TextBox from "../components/TextBox";
import FundoLogin from "../components/FundoLogin";
import { useLogin } from "../hook/useLogin";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function Login() {

    const {login, loading, error } = useLogin();
    const [form, setForm] = useState({
        email: '',
        senha: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try
        {
            const usuario = await login(form.email, form.senha);
            navigate('/home');
            alert("Login realizado com sucesso!");
            console.log(usuario.nome)
        }

        catch (err)
        {
            alert(`Erro: ${err.message}`);
        }
    }

    return (

        <>
        <FundoLogin>

            <form onSubmit={handleSubmit} className="w-[40%] m-auto">
                <img src={logo} className="w-[300px] h-auto m-auto pt-[200px] mb-20" alt="logo" />
        
                {error && <p className="text-[20px] text-red-800 mb-4 bg-red-300 border-2 border-red-800 rounded-[3px] pl-1">{error}</p>}

                <div className="mb-5 text-white">
                    <label>E-mail</label>
                    <TextBox name="email" type="email" width="100%" value={form.email} onChange={handleChange} />
                </div>
                
                <div className="mb-5 text-white">
                    <label>Senha</label>
                    <TextBox name="senha" type="password" width="100%" value={form.senha} onChange={handleChange} />
                </div>
                

                <div className="text-center mb-2.5">
                    <Button disabled={loading} modo="branco" texto={loading ? 'Entrando...' : 'Entrar'} width="100%" height="53px" />
                </div>
                
            </form>

        </FundoLogin>
        </>
    )
}

export default Login;
