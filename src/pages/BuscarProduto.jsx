import Header from "../components/Header"
import NavBar from "../components/NavBar"
import Table from "../components/Table"
import lupa from "../assets/img/lupa.png";
import loadingGif from "../assets/img/loading.gif";
import { useProdutos } from "../hook/useProduto";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function BuscarProduto() {
    const navigate = useNavigate();

    const {produtos, loading, loadingInitial, error, refetch, inputValue, setInputValue} = useProdutos();
    
    const handleChange = (event) => {setInputValue(event.target.value);}

    if (loadingInitial)
        return (
        <div className="text-center w-full m-auto flex flex-col justify-center items-center mt-[300px]">
            <img src={loadingGif} />
            <h1 className="text-[40px] text-[#005FB3]">Carregando...</h1>

            <div id='fundoGradient'>
                <div className='w-[938px] h-[875px] top-[-300px] left-[-300px]'></div>
                <div className='w-[753px] h-[753px] bottom-0 right-0'></div>
            </div>
        </div>
    )

    else
    {
        return(
        <>
        <Header />
        <NavBar />
        <h1 className="text-[40px] text-[#005FB3] mt-30 mb-10 ml-[880px]">Produtos</h1>

        <div id="buscar" className="ml-65 flex items-center gap-2 border-2 border-[#7C7C7C] rounded-[50px] h-[50px] w-[50px] text-[65px] bg-white mb-8 hover:w-[523px] transition-all duration-500 cursor-pointer">
            <img src={lupa} className="w-[39px] h-[39px] ml-1" />
            <input type="text" id="buscarInput" placeholder="Buscar..." className="w-full focus:border-0 outline-0" 
            value={inputValue}
            onChange={handleChange}
             />
        </div>
        

        <Table ml="ml-[260px]" headerItens={['ID','Nome','Quantidade','Preço Unitário','Condição','Peso','Status','Nota','Descrição','Vendedor', 'Id Vendedor']}>

        {produtos.map((produto) => (
            <tr key={produto.idProduto} className="hover:bg-gray-100 transition-colors duration-300">
                <td>{produto.idProduto}</td>
                <td>{produto.nome}</td>
                <td>{produto.quantidade}</td>
                <td>{produto.precoUnitario}</td>
                <td>{produto.condicao}</td>
                <td>{produto.peso}</td>
                <td className={produto.status == 'ativo' ? `bg-green-300` : produto.status == 'suspenso' ? `bg-yellow-200` : produto.status == 'disponível' ? 'bg-blue-200' : 'bg-red-300' }>{produto.status}</td>
                <td>{produto.nota}</td>
                <td>{produto.descricao}</td>
                <td>{produto.vendedor}</td>
                <td>{produto.idVendedor}</td>
            </tr>
        ))}

        </Table>

        <div id='fundoGradient'>
            <div className='w-[938px] h-[875px] top-[-300px] left-[-300px]'></div>
            <div className='w-[753px] h-[753px] bottom-[-700px] right-0'></div>
        </div>
        </>
        )
    }

    

}

export default BuscarProduto