import { useEffect, useState } from "react";
import api from "../services/Api.js";

export const useCliente = () => {

    const [clientes, setClientes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loadingInitial, setLoadingInitial] = useState(true);
    const [error, setError] = useState('');
    const [cliente, setCliente] = useState(null);

    const fetchClientes = async (isInitial) => {

        try {
            setLoading(true);
            setError('');

            if (isInitial)
                setLoadingInitial(true);

            else
                setLoading(true);

            const response = await api.get('/selectaAPI/Client/listar-clientes');
            setClientes(response.data);
        }

        catch (err) {
            setError('Erro ao carregar clientes');
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

    const deleteCliente = async (id) => {
        try {
            setLoading(true);
            setError('');

            await api.delete(`/selectaAPI/Client/remover-cliente`);
            setClientes(prev => prev.filter(f => f.id != id));

            return true;
        }

        catch (err) {
            const mensagem = err.response?.data?.message || "Erro ao deletar cliente";
            setError(mensagem);

            return false;
        }

        finally
        {
            setLoading(false);
        }
    }

    const buscarCliente = async (id) => {
        try {
            setLoading(true);
            setError('');

            const response = await api.put(`/selectaAPI/Client/editar-cliente`, {
                idCliente: id
            });

                setCliente(response.data);
                return response.data;
        }

        catch (err) {
            const mensagemErro = err.response?.data?.message || 'Erro ao buscar id do cliente';
            setError(mensagemErro);
            throw new Error(mensagemErro);
        }

        finally {
            setLoading(false);
        }
    }

    const editarCliente = async (dados) => {
        try {
            setLoading(true);
            setError('');

            const response = await api.post(`/selectaAPI/Client/editar-cliente`, dados);
            return response.data;
            // setClientes(prev =>
            //     prev.map(cli =>
            //         cli.idCliente === id ? {...cli, ...response.data} : cli
            //     )
            // );

            return response.data;
        }

        catch (err) {
            const mensagemErro = err.response?.data?.message || err.message || 'Erro ao editar cliente';

            setError(mensagemErro);
            throw new Error(mensagemErro);
        }

        finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchClientes(true);
    }, []);

    return {
        clientes: clientes,
        cliente,
        loading,
        loadingInitial,
        error,
        refetch: fetchClientes,
        deleteCliente,
        buscarCliente,
        editarCliente
    }
}