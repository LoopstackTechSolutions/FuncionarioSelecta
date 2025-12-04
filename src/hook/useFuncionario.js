import { useState, useEffect } from "react";
import api from '../services/Api';

export const useFuncionarios = () => {

    const [funcionarios, setFuncionarios] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loadingInitial, setLoadingInitial] = useState(true);
    const [error, setError] = useState('');

    const token = localStorage.getItem("token");

    const fetchFuncionarios = async (isInitial) => {
            
        try {
            setLoading(true);
            setError('');

            if (isInitial)
                setLoadingInitial(true);

            else
                setLoading(true);

            const response = await api.get('/selectaAPI/Employee/funcionario/listar', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setFuncionarios(response.data);

            console.log("LISTA FUNCIONÁRIOS:", response.data);
        }

        catch (err) {
            setError('Erro ao carregar funcionarios');
            console.error('Erro:', err);
        }

        finally {
            if (isInitial) {
                setLoadingInitial(false);
            } else {
                setLoading(false);
            }
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
            setFuncionarios(prev => prev.filter(f => f.idFuncionario != id));

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
                dadosAtualizado, {
                    headers: {
                    Authorization: `Bearer ${token}`
                }
                }
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
        fetchFuncionarios(true);
    }, []);

    return {
        funcionarios: funcionarios,
        loading,
        loadingInitial,
        error,
        refetch: fetchFuncionarios,
        cadastrarFuncionario,
        deleteFuncionario,
        editarFuncionario
    };
};