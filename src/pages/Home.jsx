import { useNavigate } from 'react-router-dom';

import logo from '../assets/img/selecta.svg?react';
import perfil from '../assets/img/perfil.svg?react';
import Button from '../components/Button';

import dashIcon from '../assets/img/grafico.svg?react';
import produtoIcon from '../assets/img/produto.svg?react';
import entregaIcon from '../assets/img/entrega.svg?react';
import ticketIcon from '../assets/img/ticket.svg?react';
import entregadorIcon from '../assets/img/entregador.svg?react';
import funcionarioIcon from '../assets/img/funcionario.svg?react';
import cdIcon from '../assets/img/cd.svg?react';
import empresaIcon from '../assets/img/empresa.svg?react';
import pedido from '../assets/img/pedido.svg?react';

function Home() {

    const navigate = useNavigate();

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
        <>
        <header className="h-[68px] bg-[#0074D9] flex items-center justify-between pl-5 pr-5">
            <img src={logo} className='w-32 h-auto'  />

            <div className='flex items-center gap-10'>

                <div className='flex items-center gap-1.5'>
                    <h2 className='text-white'>Olá, Usuário</h2>
                    <img src={perfil} className='w-[42px] h-auto' />
                </div>
                
                <Button texto='Sair' width='97px' height='35px' submit='false' modo='branco' />
            </div>
        </header>

        <h1 className='text-[40px] text-[#005FB3] text-center m-50'>Olá, Seja Bem-Vindo(a) Usuário!</h1>

        <div id='menuHome' className='text-[20px] grid grid-cols-3 w-[80%] m-auto gap-[170px]'>
            <div onClick={handleDashBoardClick}>
                <img src={dashIcon} alt="dashboard" />
                <h1>DashBoard</h1>
            </div>

            <div onClick={handleEntregaClick}>
                <img src={entregaIcon} alt="entregas" />
                <h1>Detalhes Entregas</h1>
            </div>

            <div onClick={handleTicketClick}>
                <img src={ticketIcon} alt="ticket" />
                <h1>Tickets</h1>
            </div>

            <div onClick={handleEntregadorClick}>
                <img src={entregadorIcon} alt="entregador" />
                <h1>Aceitar Entregador</h1>
            </div>

            <div onClick={handleEmpresaParClick}>
                <img src={empresaIcon} alt="Empresa parceira" />
                <h1>Aceitar Empresa Parceira</h1>
            </div>

            <div onClick={handleCdClick}>
                <img src={cdIcon} alt="cd" />
                <h1>Detalhes Centro de Distribuição</h1>
            </div>

            <div onClick={handleFuncionarioClick}>
                <img src={funcionarioIcon} alt="funcionario" />
                <h1>Cadastrar Funcionário</h1>
            </div>

            <div onClick={handlePedidoClick}>
                <img src={pedido} alt="pedido interno" />
                <h1>Fazer Pedido Interno</h1>
            </div>

            <div className='mb-30 relative group'>
                <img src={produtoIcon} alt="produtos" />
                <h1>Produtos</h1>

                <div id='tooltip' 
                    className='w-[120px] p-2 cursor-pointer text-[20px] grid text-center absolute right-[-70px] bottom-20 bg-white border-2 border-transparent rounded-[10px] scale-0 group-hover:scale-100'>
                    <span onClick={handleProdRevisarClick} className='hover:bg-[#e2e2e2]'>Revisar</span>
                    <span onClick={handleProdBuscarClick} className='hover:bg-[#e2e2e2]'>Buscar</span>
                </div>
            </div>
        </div>

        <div id='fundoGradient'>
            <div className='w-[938px] h-[875px] top-[-300px] left-[-300px]'></div>
            <div className='w-[838px] h-[775px] bottom-[-700px] right-0'></div>
        </div>
        </>
    )
}

export default Home