import { useState, useEffect } from "react";
import api from '../services/Api';

export const useFuncionarios = () => {

    const [funcionarios, setFuncionarios] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const fetchFuncionarios = async () => {
            
        try {
            setLoading(true);
            setError('');

            const response = await api.get('/selectaAPI/Category/get-all-categories');
            setFuncionarios(response.data);
        }

        catch (err) {
            setError('Erro ao carregar funcionarios');
            console.error('Erro:', err);
        }

        finally {
            setLoading(false);
        }
    };

    const cadastrarFuncionario = async (dadosFuncionario) => {
        try {
            setLoading(true);
            setError('');

            const response = await api.post('/selectaAPI/Employee/employee-register', dadosFuncionario);

            setFuncionarios(prev => [...prev, response.data]);
            return response.data;
        }

        catch (err) {
            const mensagemErro = err.response?.data?.message || err.message || 'Erro ao cadastrar funcionário';
            setError(mensagemErro);
            throw new Error(mensagemErro);
        }

        finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchFuncionarios();
    }, []);

    return {
        funcionarios: funcionarios,
        loading,
        error,
        refetch: fetchFuncionarios,
        cadastrarFuncionario
    };
};