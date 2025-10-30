import React from 'react';

import homeIcon from '../assets/img/home.svg?react';
import dashIcon from '../assets/img/grafico.svg?react';
import produtoIcon from '../assets/img/produto.svg?react';
import entregaIcon from '../assets/img/entrega.svg?react';
import ticketIcon from '../assets/img/ticket.svg?react';
import entregadorIcon from '../assets/img/entregador.svg?react';
import funcionarioIcon from '../assets/img/funcionario.svg?react';
import cdIcon from '../assets/img/cd.svg?react';
import empresaIcon from '../assets/img/empresa.svg?react';
import pedidoIcon from '../assets/img/pedido.svg?react';
import { useNavigate } from 'react-router-dom';

function NavBar () {

    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate('/home');
    }

    const handleDashBoardClick = () => {
        navigate('/dashboard');
    }

    const handleFuncionarioClick = () => {
        navigate('/funcionarioCadastrar');
    }

    const handleEntregadorClick = () => {
        navigate('/entregadorAceitar');
    }

    const handleEntregaClick = () => {
        navigate('/entregaDetalhes');
    }

    const handleEmpresaParClick = () => {
        navigate('/empresaParceira');
    }

    const handleCdClick = () => {
        navigate('/centroDistribuicao');
    }

    const handlePedidoClick = () => {
        navigate('/pedidoInterno');
    }

    const handleTicketClick = () => {
        navigate('/tickets');
    }

    const handleProdBuscarClick = () => {
        navigate('/produto/buscar');
    }

    const handleProdRevisarClick = () => {
        navigate('/produto/revisar');
    }
    return (
        
        <div id='navbar' className='mr-28 text-[20px] h-full fixed top-0 border-b-20 border-t-20 border-l-20 border-r-2 bg-white border-white border-r-[#D3D3D3] pt-9 max-w-[110px] overflow-hidden'>
            <ul  className='flex flex-col gap-10 cursor-pointer'>
                <li onClick={handleHomeClick}> <img src={homeIcon} /> Página Inicial</li>
                <li onClick={handleDashBoardClick}> <img src={dashIcon}  /> DashBoard</li>
                <div className='grid h-[50px] overflow-hidden hover:h-[250px] transition-all duration-300 mr-2 w-full'> 
                    
                    <div className='flex items-center justify-items-start w-full'>
                        <img src={produtoIcon} /> 
                        <h1>Produto </h1> 
                    </div>
                    
                    <div className='grid text-center bg-[#004f94]'>
                        <a href="http://localhost:5173/produto/buscar" 
                        className='hover:bg-[#00427c] border-4 border-transparent rounded-[5px] transition-all duration-300 pt-3.5'>
                        Buscar
                        </a>

                        <a href="http://localhost:5173/produto/revisar" 
                        className='hover:bg-[#00427c] border-4 border-transparent rounded-[5px] transition-all duration-300 pt-3.5'>
                        Revisar
                        </a>

                    </div>
                    
                </div>
                <li onClick={handleEntregaClick}> <img src={entregaIcon} /> Detalhes Entrega</li>
                <li onClick={handleTicketClick}> <img src={ticketIcon} /> Tickets</li>
                <li onClick={handleEntregadorClick}> <img src={entregadorIcon} /> Aceitar Entregador</li>
                <li onClick={handleFuncionarioClick}> <img src={funcionarioIcon} /> Cadastrar Funcionário</li>
                <li onClick={handlePedidoClick}> <img src={pedidoIcon} /> Fazer Pedido Interno</li>
                <li onClick={handleCdClick}> <img src={cdIcon} /> Detalhes Centro de Distribuição</li>
                <li onClick={handleEmpresaParClick}> <img src={empresaIcon} /> Aceitar Empresa Parceira</li>
            </ul>
        </div>
    )
}

export default NavBar