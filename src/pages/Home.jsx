import { useNavigate } from 'react-router-dom';

import logo from '../assets/img/logo.png';
import perfil from '../assets/img/perfil.svg?react';
import Button from '../components/Button';
import dashIcon from '../assets/img/grafico.svg?react';
import produtoIcon from '../assets/img/produto.svg?react';
import funcionarioIcon from '../assets/img/funcionario.svg?react';
import pedido from '../assets/img/pedido.svg?react';
import clienteIcon from '../assets/img/clienteIcon.png';
import promoIcon from '../assets/img/promotionIcon.png';


function Home() {

    let usuarioNome = localStorage.getItem('nome');
    let acesso = '';

    const navigate = useNavigate();

    const handleDashBoardClick = () => {
        navigate('/dashboard');
    }

    const handleFuncionarioClick = () => {
        navigate('/funcionario');
    }

    const handleFunciCadastrarClick = () => {
        navigate('/funcionario/cadastrar');
    }

    const handleClientesClick = () => {
        navigate('/clientes');
    }

    const handleProdBuscarClick = () => {
        navigate('/produto/buscar');
    }

    const handlePromocaoClick = () => {
        navigate('/promocao');
    }

    if (localStorage.getItem('nivelAcesso') == 'admin')
    {
         acesso = (
            <>
                <div onClick={handleDashBoardClick}>
                    <img src={dashIcon} alt="dashboard" />
                    <h1>DashBoard</h1>
                </div>

                <div onClick={handleFunciCadastrarClick} className='delay-1000'>
                    <img src={pedido} />
                    <h1>Cadastrar Funcionário</h1>
                </div>

                <div onClick={handleFuncionarioClick} className='delay-200'>
                    <img src={funcionarioIcon} />
                    <h1>Listar Funcionários</h1>
                </div>

                <div onClick={handleClientesClick} className='delay-400'>
                    <img src={clienteIcon} />
                    <h1>Listar Clientes</h1>
                </div>

                <div onClick={handleProdBuscarClick} className='delay-300'>
                    <img src={produtoIcon} />
                    <h1>Buscar Produtos</h1>
                </div>

                <div onClick={handlePromocaoClick} className='delay-500'>
                    <img src={promoIcon} />
                    <h1>Criar Promoção</h1>
                </div>
            </>
            

           
        );
    }

    else if (localStorage.getItem('nivelAcesso') == 'gerente')
    {
        acesso = (
            <>
                <div onClick={handleDashBoardClick}>
                    <img src={dashIcon} alt="dashboard" />
                    <h1>DashBoard</h1>
                </div>

                <div onClick={handleFunciCadastrarClick} className='delay-1000'>
                    <img src={pedido} />
                    <h1>Cadastrar Funcionário</h1>
                </div>

                <div onClick={handleFuncionarioClick} className='delay-200'>
                    <img src={funcionarioIcon} />
                    <h1>Listar Funcionários</h1>
                </div>
            </>
        )
    }

    else
    {
        acesso = (
            <>
            </>
        )
    }

    return (
        <>
        <header className="h-[68px] bg-[#0074D9] flex items-center justify-between pl-5 pr-5">
            <img src={logo} className='w-32 h-auto'  />

            <div className='flex items-center gap-10'>

                <div className='flex items-center gap-1.5'>
                    <h2 className='text-white'>Olá, {usuarioNome}</h2>
                    <img src={perfil} className='w-[42px] h-auto' />
                </div>
                
                <Button texto='Sair' width='97px' height='35px' submit='false' modo='branco' />
            </div>
        </header>

        <h1 id='tituloHome' className='text-[40px] text-[#005FB3] text-center m-50'>Olá, Seja Bem-Vindo(a) {usuarioNome}</h1>

        <div id='menuHome' className='text-[20px] grid grid-cols-3 w-[90%] m-auto gap-[170px]'>
            
        {acesso}
            
        </div>

        <div id='fundoGradient'>
            <div className='w-[938px] h-[875px] top-[-300px] left-[-300px]'></div>
            <div className='w-[838px] h-[775px] bottom-0 right-0'></div>
        </div>
        </>
    )
}

export default Home