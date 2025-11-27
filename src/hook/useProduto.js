import { useEffect, useState } from "react";
import api from "../services/Api";

export const useProdutos = () => {

    const [produtos, setProdutos] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    
    const fetchProdutos = async () => {
        try {
            setLoading(true);
            setError('');

            const response = await api.get(`/selectaAPI/Product/pesquisar-produtos?query=${inputValue}`);
            setProdutos(response.data);
        }

        catch (err) {
            setError('Erro ao carregar produtos');
            console.error('Erro:', err);
        }

        finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProdutos();
    }, [inputValue]);

    return {
        produtos: produtos,
        loading,
        error,
        inputValue,
        setInputValue
    }
}