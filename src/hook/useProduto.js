import { useEffect, useState } from "react";
import api from "../services/Api";

export const useProdutos = () => {

    const [produtos, setProdutos] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [loading, setLoading] = useState(true);
    const [loadingInitial, setLoadingInitial] = useState(true);
    const [error, setError] = useState('');
    
    const fetchProdutos = async (isInitial) => {
        try {
            setLoading(true);
            setError('');

            if (isInitial)
                setLoadingInitial(true);

            else
                setLoading(true);

            const response = await api.get(`/selectaAPI/Product/pesquisar-produtos?query=${inputValue}`);
            setProdutos(response.data);
        }

        catch (err) {
            setError('Erro ao carregar produtos');
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

    useEffect(() => {
        fetchProdutos(true);
    }, []);

    useEffect(() => {
    if (inputValue !== "") {
        fetchProdutos(false); // quando digitar
    }
}, [inputValue]);

    return {
        produtos: produtos,
        loading,
        loadingInitial,
        error,
        inputValue,
        setInputValue
    }
}