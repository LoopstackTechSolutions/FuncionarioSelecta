import { useState } from "react"
import api from "../services/Api";

export const usePromocao = () => {
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const [promocoes, setPromocoes] = useState([]);

    const cadastrarPromocao = async (dadosPromocao) => {
        
        try {
            setLoading(true);
            setError('');

            const response = await api.post('/selectaAPI/Product/cadastrar-promocao', dadosPromocao);

            setPromocoes(prev => [...prev, response.data]);
            return response.data;
        }

        catch (err) {
            const mensagemErro = err.response?.data?.message || err.message || 'Erro ao criar promoção.';
            setError(mensagemErro);
            throw new Error(mensagemErro);
        }

        finally {
            setLoading(false);
        }
    }

    return {
        promocoes: promocoes,
        loading,
        error,
        cadastrarPromocao
    };
};