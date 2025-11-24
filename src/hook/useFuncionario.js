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

            const response = await api.get('/selectaAPI/Employee/funcionario/listar');
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

            const response = await api.post('/selectaAPI/Employee/cadastrar-funcionario', dadosFuncionario);

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

    const deleteFuncionario = async (id) => {
        try {
            setLoading(true);
            setError('');

            await api.delete(`/selectaAPI/Employee/funcionario/remover/${id}`);
            setFuncionarios(prev => prev.filter(f => f.id != id));

            return true;
        }

        catch (err) {
            const mensagem = err.response?.data?.message || "Erro ao deletar funcionário";
            setError(mensagem);

            return false;
        }

        finally
        {
            setLoading(false);
        }
    }

    const editarFuncionario = async (id, dadosAtualizado) => {
        try {
            setLoading(true);
            setError('');

            const response = await api.put(
                `/selectaAPI/Employee/editar-funcionario/${id}`,
                dadosAtualizado
            );

            setFuncionarios(prev =>
                prev.map(func =>
                    func.idFuncionario === id ? {...func, ...response.data} : func
                )
            );

            return response.data;
        }

        catch (err) {
            const mensagemErro = err.response?.data?.message || err.message || 'Erro ao editar funcionário';

            setError(mensagemErro);
            throw new Error(mensagemErro);
        }

        finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchFuncionarios();
    }, []);

    return {
        funcionarios: funcionarios,
        loading,
        error,
        refetch: fetchFuncionarios,
        cadastrarFuncionario,
        deleteFuncionario,
        editarFuncionario
    };
};