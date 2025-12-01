import { useEffect, useState } from "react"

export const useClientes =() => {

    const [clientes, setClientes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const fetchClientes = async () => {

        try {
            setLoading(true);
            setError('');

            const response = await api.get('/selectaAPI/Product/cadastrar-promocao');
            setClientes(response.data);
        }

        catch (err) {
            setError('Erro ao carregar clientes');
            console.error('Erro:', err);
        }

        finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchClientes();
    }, []);

    return {
        clientes: clientes,
        loading,
        error,
        refetch: fetchClientes
    }
}