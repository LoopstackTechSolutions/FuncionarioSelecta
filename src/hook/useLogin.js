import { useState, useEffect } from "react";
import api from '../services/Api';

export const useLogin = () => {

    const [usuario, setUsuario] = useState([]);
    const [token, setToken] = useState(localStorage.getItem('token') || '');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const login = async(email, senha) => {
        try
        {
            setLoading(true);
            setError('');

            const response = await api.post('/selectaAPI/Login/login-funcionario', {
                email: email,
                senha: senha
            });

            const {token, nome, nivelAcesso} = response.data;
            

            setToken(token);
            localStorage.setItem('token', token);
            localStorage.setItem('nome', nome);
            localStorage.setItem('nivelAcesso', nivelAcesso);
            console.log(response.data);

            return {token};
        }

        catch (err)
        {
            const mensagem = err.response?.data?.message || "E-mail ou senha incorretos, por favor digite novamente.";

            setError(mensagem);
            throw new Error(mensagem);
        }

        finally
        {
            setLoading(false);
        }
    };

    const logout = () => {
        setUsuario(null);
        setToken('');
        localStorage.removeItem('token');
    }

    const cadastrarUsuario = async(dadosUsuario) => {
        try
        {
            setLoading(true);
            setError('');

            const response = await api.post('/selectaAPI/Login/login-funcionario', dadosUsuario);

            setUsuario(prev => [...prev, response.data]);
            return response.data;
        }

        catch (err)
        {
            const mensagemErro = err.response?.data?.message || err.message || 'Erro ao cadastrar usuário';
            setError(mensagemErro);
            throw new Error(mensagemErro);
        }

        finally
        {
            setLoading(false);
        }
    };

    return {
        usuario,
        token,
        loading,
        error,
        login,
        logout,
        refetch: cadastrarUsuario
    }
}