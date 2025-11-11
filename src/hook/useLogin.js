import { useState, useEffect } from "react";
import api from '../services/Api';

export const useLogin = () => {

    const [usuario, setUsuario] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const cadastrarUsuario = async(dadosUsuario) => {
        try
        {
            setLoading(true);
            setError('');

            const response = await api.post('endpoint', dadosUsuario);

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
        usuario: usuario,
        loading,
        error,
        refetch: cadastrarUsuario
    }
}